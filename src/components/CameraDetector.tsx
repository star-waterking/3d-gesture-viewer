/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { CameraStatus, GestureState } from '../types';
import { detectGesture } from '../utils/gestureDetector';
import { Camera, RefreshCw, AlertCircle, Video, VideoOff } from 'lucide-react';

interface CameraDetectorProps {
  onGestureDetected: (gesture: GestureState) => void;
  cameraStatus: CameraStatus;
  setCameraStatus: (status: CameraStatus) => void;
  sensitivity: number;
}

export const CameraDetector: React.FC<CameraDetectorProps> = ({
  onGestureDetected,
  cameraStatus,
  setCameraStatus,
  sensitivity,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const lastHandXRef = useRef<number | null>(null);
  const activeCameraRef = useRef<any>(null);
  const activeHandsRef = useRef<any>(null);
  const [initError, setInitError] = useState<string | null>(null);

  // Stop camera stream and clean up MediaPipe objects
  const stopCamera = () => {
    if (activeCameraRef.current) {
      try {
        activeCameraRef.current.stop();
      } catch (e) {
        console.error('Error stopping MediaPipe Camera:', e);
      }
      activeCameraRef.current = null;
    }

    if (activeHandsRef.current) {
      try {
        activeHandsRef.current.close();
      } catch (e) {
        console.error('Error closing MediaPipe Hands:', e);
      }
      activeHandsRef.current = null;
    }

    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    // Clear overlay canvas
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    lastHandXRef.current = null;
    setCameraStatus('off');
  };

  // Start MediaPipe Hands and Webcam Camera stream
  const startCamera = async () => {
    setInitError(null);
    setCameraStatus('loading');

    // 1. Safety check for browser environment & CDN libraries
    const HandsClass = (window as any).Hands;
    const CameraClass = (window as any).Camera;

    if (!HandsClass || !CameraClass) {
      setInitError('MediaPipe dependencies are still loading. Please wait a moment and try again.');
      setCameraStatus('error');
      return;
    }

    try {
      // 2. Request webcam access to fail-fast if user blocks it
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      // 3. Instantiate MediaPipe Hands
      const handsInstance = new HandsClass({
        locateFile: (file: string) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        },
      });

      handsInstance.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.65,
        minTrackingConfidence: 0.65,
      });

      // Handle hand detection results
      handsInstance.onResults((results: any) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const landmarks = results.multiHandLandmarks[0];

          // Run gesture heuristic rules
          const currentGesture = detectGesture(
            landmarks, 
            lastHandXRef.current, 
            sensitivity
          );

          // Update tracking states
          lastHandXRef.current = landmarks[9].x; // Middle finger MCP as reference center
          
          // Send back gesture to parent App
          onGestureDetected(currentGesture);

          // Draw minimalist hand skeleton
          drawHandSkeleton(ctx, landmarks);
        } else {
          // No hand detected
          onGestureDetected({
            type: 'none',
            confidence: 0,
            extendedFingers: 0,
            movementX: 0,
            rawX: 0.5,
            rawY: 0.5,
          });
          lastHandXRef.current = null;
        }
      });

      activeHandsRef.current = handsInstance;

      // 4. Instantiate MediaPipe Camera wrapper
      if (videoRef.current) {
        const cameraInstance = new CameraClass(videoRef.current, {
          onFrame: async () => {
            if (videoRef.current && activeHandsRef.current) {
              await activeHandsRef.current.send({ image: videoRef.current });
            }
          },
          width: 320,
          height: 240,
        });

        await cameraInstance.start();
        activeCameraRef.current = cameraInstance;
        setCameraStatus('on');
      }
    } catch (err: any) {
      console.error('Failed to initialize webcam hand tracking:', err);
      let errMsg = 'Failed to access camera. Please make sure camera permissions are enabled in your browser.';
      if (err.name === 'NotAllowedError') {
        errMsg = 'Webcam permission denied. Please allow camera access in your browser settings.';
      } else if (err.name === 'NotFoundError') {
        errMsg = 'No webcam hardware detected on this device.';
      }
      setInitError(errMsg);
      setCameraStatus('error');
      stopCamera();
    }
  };

  // Modern minimalist skeleton renderer
  const drawHandSkeleton = (ctx: CanvasRenderingContext2D, landmarks: any[]) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // Bone links index map
    const bones = [
      [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
      [0, 5], [5, 6], [6, 7], [7, 8], // Index
      [5, 9], [9, 10], [10, 11], [11, 12], // Middle
      [9, 13], [13, 14], [14, 15], [15, 16], // Ring
      [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
      [0, 17], // Wrist outer
    ];

    // 1. Draw glowing background lines
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)'; // indigo neon glow
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    bones.forEach(([from, to]) => {
      const p1 = landmarks[from];
      const p2 = landmarks[to];
      if (p1 && p2) {
        ctx.beginPath();
        // Since input is mirrored horizontally for intuitive feedback, we flip X when rendering lines on camera preview
        ctx.moveTo((1 - p1.x) * width, p1.y * height);
        ctx.lineTo((1 - p2.x) * width, p2.y * height);
        ctx.stroke();
      }
    });

    // 2. Draw solid foreground lines
    ctx.strokeStyle = '#4f46e5'; // Indigo-600
    ctx.lineWidth = 2.5;
    
    bones.forEach(([from, to]) => {
      const p1 = landmarks[from];
      const p2 = landmarks[to];
      if (p1 && p2) {
        ctx.beginPath();
        ctx.moveTo((1 - p1.x) * width, p1.y * height);
        ctx.lineTo((1 - p2.x) * width, p2.y * height);
        ctx.stroke();
      }
    });

    // 3. Draw joint dots
    landmarks.forEach((pt, index) => {
      const isTip = [4, 8, 12, 16, 20].includes(index);
      
      ctx.beginPath();
      ctx.arc((1 - pt.x) * width, pt.y * height, isTip ? 4.5 : 3, 0, 2 * Math.PI);
      
      // Color coding different segments
      if (isTip) {
        ctx.fillStyle = '#6366f1'; // glowing indigo tips
      } else if (index === 0) {
        ctx.fillStyle = '#1e1b4b'; // dark wrist anchor
      } else {
        ctx.fillStyle = '#818cf8'; // general knuckles
      }
      
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  };

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const handleToggleCamera = () => {
    if (cameraStatus === 'on') {
      stopCamera();
    } else {
      startCamera();
    }
  };

  return (
    <div className="flex flex-col gap-3" id="camera-detector-panel">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <Camera size={14} className="text-slate-400" /> WEBCAM TRACKER
        </label>
        
        <button
          onClick={handleToggleCamera}
          disabled={cameraStatus === 'loading'}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
            cameraStatus === 'on'
              ? 'bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100'
              : cameraStatus === 'loading'
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-100 hover:shadow-md'
          }`}
          id="camera-toggle-btn"
        >
          {cameraStatus === 'on' ? (
            <>
              <VideoOff size={13} /> Close Camera
            </>
          ) : cameraStatus === 'loading' ? (
            <>
              <RefreshCw size={13} className="animate-spin" /> Starting...
            </>
          ) : (
            <>
              <Video size={13} /> Start Camera
            </>
          )}
        </button>
      </div>

      {/* Main camera frame wrapper */}
      <div 
        className={`relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 border transition-all duration-300 ${
          cameraStatus === 'on' ? 'border-indigo-200 shadow-inner' : 'border-slate-100 bg-slate-950'
        }`}
        id="camera-frame-container"
      >
        {/* Hidden video element used by MediaPipe */}
        <video
          ref={videoRef}
          className="hidden"
          playsInline
          muted
          width="320"
          height="240"
        />

        {/* Display mirrored video container */}
        {cameraStatus === 'on' ? (
          <div className="w-full h-full relative">
            {/* Mirroring video via scaling */}
            <video
              src=""
              className="w-full h-full object-cover scale-x-[-1]"
              style={{ display: 'none' }} // we hide the raw tag and just use standard overlay tracking on canvas
            />
            {/* Overlay canvas on which skeleton and camera is rendered */}
            {/* To save CPU and render cleanly, we stream webcam to video, mirror it visually, and overlay canvas */}
            <video
              ref={(el) => {
                if (el && videoRef.current && el.srcObject !== videoRef.current.srcObject) {
                  el.srcObject = videoRef.current.srcObject;
                  el.play().catch(() => {});
                }
              }}
              className="absolute inset-0 w-full h-full object-cover scale-x-[-1] opacity-75"
              playsInline
              muted
            />
            <canvas
              ref={canvasRef}
              width={320}
              height={240}
              className="absolute inset-0 w-full h-full z-10 block pointer-events-none"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            {cameraStatus === 'loading' ? (
              <div className="flex flex-col items-center gap-2">
                <RefreshCw size={24} className="text-indigo-400 animate-spin" />
                <p className="text-xs text-slate-400 font-mono">Initializing hand tracking neural network...</p>
              </div>
            ) : cameraStatus === 'error' ? (
              <div className="flex flex-col items-center gap-2 text-rose-400 max-w-xs">
                <AlertCircle size={24} className="text-rose-500" />
                <p className="text-xs font-medium text-rose-300">{initError || 'An error occurred'}</p>
                <button
                  onClick={startCamera}
                  className="mt-2 text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white px-2.5 py-1 rounded"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5 text-slate-400">
                <Video size={24} className="text-slate-600 mb-1" />
                <p className="text-xs font-semibold">Webcam Feed Off</p>
                <p className="text-[10px] text-slate-500 max-w-[200px]">
                  Click "Start Camera" to enable interactive hand gesture model control
                </p>
              </div>
            )}
          </div>
        )}

        {/* Minimal status dot */}
        {cameraStatus === 'on' && (
          <div className="absolute top-3 right-3 bg-indigo-600/90 text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded-full z-20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE TRACKING
          </div>
        )}
      </div>
    </div>
  );
};
