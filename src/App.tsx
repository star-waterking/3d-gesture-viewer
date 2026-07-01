/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { CameraDetector } from './components/CameraDetector';
import { ModelUpload } from './components/ModelUpload';
import { GestureGuide } from './components/GestureGuide';
import { ModelStats } from './components/ModelStats';
import { GestureState, ModelInfo, CameraStatus } from './types';
import { 
  Sparkles, 
  RotateCcw, 
  Sliders, 
  HelpCircle, 
  VolumeX, 
  Play, 
  Pause,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [modelInfo, setModelInfo] = useState<ModelInfo | null>(null);
  const [gesture, setGesture] = useState<GestureState>({
    type: 'none',
    confidence: 0,
    extendedFingers: 0,
    movementX: 0,
    rawX: 0.5,
    rawY: 0.5,
  });
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>('off');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [sensitivity, setSensitivity] = useState<number>(1.2);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  const handleGestureDetected = (newGesture: GestureState) => {
    setGesture(newGesture);
  };

  const handleFileSelect = (file: File | null) => {
    setUploadedFile(file);
    if (!file) {
      setModelInfo(null);
    }
  };

  const resetRotationAndScale = () => {
    // Triggers custom custom event to reset threejs camera
    const canvasContainer = document.getElementById('three-canvas-container');
    if (canvasContainer) {
      // We can reload model file or reset state
      // Instead of reloading, setting uploadedFile to itself resets the ThreeCanvas state!
      if (uploadedFile) {
        const copy = new File([uploadedFile], uploadedFile.name, { type: uploadedFile.type });
        setUploadedFile(copy);
      } else {
        // Nulling and re-triggering default model
        setUploadedFile(null);
        // Force state reset in ThreeCanvas by triggering re-render
        const event = new CustomEvent('reset-three-view');
        window.dispatchEvent(event);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans" id="app-root">
      {/* Sleek Minimalist Header */}
      <header className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40 shadow-sm shadow-slate-100/40" id="app-header">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                3D Model Gesture Viewer
                <span className="text-[10px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-mono uppercase">
                  Interactive Space
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Webcam-based Hand Tracking & 3D GLB/GLTF Rendering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3" id="header-controls">
            <button
              onClick={() => setShowWelcome(!showWelcome)}
              className={`p-1.5 rounded-lg border text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-semibold ${
                showWelcome ? 'bg-indigo-50/50 border-indigo-100 text-indigo-600 hover:text-indigo-700' : 'border-slate-200'
              }`}
              title="Show interactive helper"
              id="help-toggle-btn"
            >
              <HelpCircle size={15} />
              <span>{showWelcome ? 'Hide Help' : 'Show Help'}</span>
            </button>

            {/* Quick status dots */}
            <div className="flex items-center gap-4 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-100 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${cameraStatus === 'on' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                <span className="text-slate-500 text-[10px] uppercase">TRACKER</span>
              </div>
              <div className="w-[1px] h-3 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${uploadedFile ? 'bg-indigo-500' : 'bg-amber-500'}`}></span>
                <span className="text-slate-500 text-[10px] uppercase">
                  {uploadedFile ? 'CUSTOM MODEL' : 'DEFAULT OBJ'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Interface */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6" id="app-main">
        
        {/* Welcome Guide Alert */}
        {showWelcome && (
          <div className="lg:col-span-12 bg-indigo-900 text-indigo-100 p-5 rounded-2xl shadow-xl shadow-indigo-950/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in" id="welcome-banner">
            <div className="flex gap-4">
              <div className="p-3 bg-indigo-800/80 rounded-xl text-indigo-300 flex-shrink-0 self-start md:self-center">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  欢迎体验 3D 手势模型展示器！
                </h3>
                <p className="text-xs text-indigo-200 max-w-3xl leading-relaxed">
                  本系统将人工智能手势算法带到您的浏览器中。无需佩戴设备，开启摄像头，即可通过纯手势对 GLB 模型进行全方位交互。
                  张开五指放大，握拳缩小，左右移动手部即可进行平滑旋转。
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-xs font-bold bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-950 text-indigo-100 border border-indigo-700/50 px-4 py-2 rounded-xl transition-all flex-shrink-0 cursor-pointer self-stretch md:self-auto text-center"
              id="close-welcome-btn"
            >
              开始控制
            </button>
          </div>
        )}

        {/* Left Control Panel Column */}
        <section className="lg:col-span-4 flex flex-col gap-6" id="left-sidebar">
          {/* Upload Box Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50 flex flex-col gap-5">
            <ModelUpload 
              onFileSelect={handleFileSelect} 
              selectedFile={uploadedFile} 
            />

            <ModelStats info={modelInfo} />
          </div>

          {/* Camera Detector Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50">
            <CameraDetector 
              onGestureDetected={handleGestureDetected}
              cameraStatus={cameraStatus}
              setCameraStatus={setCameraStatus}
              sensitivity={sensitivity}
            />
          </div>

          {/* Gesture Control Guide Box */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50">
            <GestureGuide currentGesture={gesture.type} />
          </div>
        </section>

        {/* Right 3D Model Render Area */}
        <section className="lg:col-span-8 flex flex-col gap-4" id="right-viewport">
          
          {/* Canvas container with controls overlay */}
          <div className="relative flex-1 flex flex-col min-h-[450px] md:min-h-[600px] bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 overflow-hidden" id="canvas-container-wrapper">
            
            {/* Top control bar overlay inside canvas */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-none" id="canvas-overlay-top">
              {/* Active Gesture Badge */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-100 px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2.5 pointer-events-auto">
                <span className="flex h-2.5 w-2.5 relative">
                  {gesture.type !== 'none' ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-300"></span>
                  )}
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  当前手势:
                </span>
                <span className="text-xs font-bold text-indigo-600 font-mono">
                  {gesture.type === 'open' && '🖐️ 张开 (放大)'}
                  {gesture.type === 'fist' && '✊ 握拳 (缩小)'}
                  {gesture.type === 'move_left' && '⬅️ 向左移动 (左旋转)'}
                  {gesture.type === 'move_right' && '➡️ 向右移动 (右旋转)'}
                  {gesture.type === 'none' && '无 (静止)'}
                </span>
              </div>

              {/* Reset/Quick control actions */}
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={resetRotationAndScale}
                  className="bg-white/95 backdrop-blur-md border border-slate-100 p-2.5 rounded-xl shadow-sm hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Reset viewport camera position and model scale"
                  id="reset-view-btn"
                >
                  <RotateCcw size={14} />
                  <span>重置视角</span>
                </button>
              </div>
            </div>

            {/* Bottom quick adjustment controls */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center justify-between gap-3 z-30 pointer-events-none" id="canvas-overlay-bottom">
              
              {/* Autoplay Auto-Rotate switch */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`pointer-events-auto flex items-center gap-2 px-3.5 py-2 rounded-xl shadow-sm backdrop-blur-md border transition-all duration-200 text-xs font-semibold cursor-pointer ${
                  autoRotate 
                    ? 'bg-indigo-600 text-white border-indigo-500' 
                    : 'bg-white/95 text-slate-600 border-slate-100 hover:bg-slate-50'
                }`}
                id="auto-rotate-toggle"
              >
                {autoRotate ? <Pause size={13} /> : <Play size={13} />}
                <span>{autoRotate ? '停止自动旋转' : '开启自动旋转'}</span>
              </button>

              {/* Multiplier Sensitivity Slider inside nice bubble */}
              <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-sm flex items-center gap-3.5 max-w-sm" id="sensitivity-bubble">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Sliders size={13} />
                  <span className="text-[10px] font-bold font-mono uppercase tracking-wider">手势灵敏度</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(parseFloat(e.target.value))}
                  className="w-24 md:w-32 accent-indigo-600 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                  id="sensitivity-slider"
                />
                <span className="text-xs font-bold text-indigo-600 font-mono w-6">
                  {sensitivity.toFixed(1)}x
                </span>
              </div>
            </div>

            {/* Canvas Core Element */}
            <ThreeCanvas 
              uploadedFile={uploadedFile} 
              gesture={gesture} 
              onModelLoaded={setModelInfo}
              autoRotate={autoRotate}
              sensitivity={sensitivity}
            />
          </div>

          {/* Quick instructions / Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="canvas-footer-hints">
            <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-0.5">自适应渲染引擎</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  系统会自动对任何上传的 3D 模型进行重心定位、自动比例缩放，并生成平滑光影，保证模型始终呈现在视口中心。
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-0.5">隐私与性能保证</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  所有摄像头计算与 3D 渲染均在您的浏览器本地进行，数据不会上传到任何服务器。安全隐私，超低延迟。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Minimal Footer */}
      <footer className="bg-white border-t border-slate-100 py-6 px-6 text-center mt-12" id="app-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 Minimal 3D Model Gesture Studio. Built for exceptional interactivity.</p>
          <div className="flex gap-4">
            <span>Powered by MediaPipe Hands</span>
            <span>•</span>
            <span>Three.js WebGL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
