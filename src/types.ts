/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type GestureType = 'none' | 'open' | 'fist' | 'move_left' | 'move_right';

export interface GestureState {
  type: GestureType;
  confidence: number;
  extendedFingers: number;
  movementX: number;
  rawX: number;
  rawY: number;
}

export interface ModelInfo {
  name: string;
  size: string;
  vertices: number;
  triangles: number;
}

export type CameraStatus = 'off' | 'loading' | 'on' | 'error';
