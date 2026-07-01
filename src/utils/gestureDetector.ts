/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GestureState, GestureType } from '../types';

interface Point {
  x: number;
  y: number;
  z?: number;
}

// Calculate Euclidean distance between two 3D points
function getDistance(p1: Point, p2: Point): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dz = (p1.z !== undefined && p2.z !== undefined) ? p1.z - p2.z : 0;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function detectGesture(
  landmarks: Point[],
  prevX: number | null,
  sensitivity: number = 1.0
): GestureState {
  if (!landmarks || landmarks.length < 21) {
    return {
      type: 'none',
      confidence: 0,
      extendedFingers: 0,
      movementX: 0,
      rawX: 0.5,
      rawY: 0.5,
    };
  }

  const wrist = landmarks[0];
  const thumbTip = landmarks[4];
  const thumbMcp = landmarks[2];

  // We check 5 fingers: Thumb, Index, Middle, Ring, Pinky
  const fingers = [
    { tip: 8, pip: 6, label: 'Index' },
    { tip: 12, pip: 10, label: 'Middle' },
    { tip: 16, pip: 14, label: 'Ring' },
    { tip: 20, pip: 18, label: 'Pinky' }
  ];

  let extendedCount = 0;

  // 1. Check Index, Middle, Ring, Pinky
  fingers.forEach(finger => {
    const dWristTip = getDistance(wrist, landmarks[finger.tip]);
    const dWristPip = getDistance(wrist, landmarks[finger.pip]);
    // If the tip is significantly further from wrist than the PIP joint, it is extended
    if (dWristTip > dWristPip * 1.15) {
      extendedCount++;
    }
  });

  // 2. Check Thumb
  // For thumb, we can check its distance to Pinky MCP (17) or Index MCP (5),
  // or simply distance from wrist to thumb tip vs wrist to thumb MCP.
  const dWristThumbTip = getDistance(wrist, thumbTip);
  const dWristThumbMcp = getDistance(wrist, thumbMcp);
  if (dWristThumbTip > dWristThumbMcp * 1.1) {
    extendedCount++;
  }

  // Determine open hand vs fist
  let type: GestureType = 'none';
  
  // Hand center/reference point is landmark 9 (Middle finger MCP)
  const handX = landmarks[9].x;
  const handY = landmarks[9].y;

  // Calculate movement delta X
  let movementX = 0;
  if (prevX !== null) {
    // raw difference
    movementX = handX - prevX;
  }

  // Movement thresholds
  const rotateThreshold = 0.008 * sensitivity;

  // Check movement first to give rotation priority if hand is moving
  if (prevX !== null && Math.abs(movementX) > rotateThreshold) {
    // In camera space: x increases from left (0) to right (1).
    // If we move hand to the right (x increases), movementX is positive.
    // In standard mirrored webcam view, hand moving right on screen means x decreases (since it is mirrored, or wait!)
    // Let's think: Camera is mirrored. If we move hand to the right, in mirrored video it goes right.
    // If we move hand left (screen left), X decreases, movementX < 0.
    // We can map movementX < -rotateThreshold to move_left and > rotateThreshold to move_right.
    if (movementX < -rotateThreshold) {
      type = 'move_left';
    } else if (movementX > rotateThreshold) {
      type = 'move_right';
    }
  }

  // If no clear horizontal movement, check for open/close hand
  if (type === 'none') {
    if (extendedCount >= 4) {
      type = 'open'; // Open hand -> Zoom in
    } else if (extendedCount <= 1) {
      type = 'fist'; // Fist -> Zoom out
    }
  }

  return {
    type,
    confidence: 0.9, // High confidence since we detected landmarks
    extendedFingers: extendedCount,
    movementX,
    rawX: handX,
    rawY: handY,
  };
}
