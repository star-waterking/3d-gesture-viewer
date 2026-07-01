/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GestureState, ModelInfo } from '../types';

interface ThreeCanvasProps {
  uploadedFile: File | null;
  gesture: GestureState;
  onModelLoaded: (info: ModelInfo) => void;
  autoRotate: boolean;
  sensitivity: number;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  uploadedFile,
  gesture,
  onModelLoaded,
  autoRotate,
  sensitivity,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Keep references to ThreeJS objects for the render loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);

  // Ref to track currently loaded model to clean up
  const currentModelRef = useRef<THREE.Object3D | null>(null);

  // Smooth animation targets
  const targetRotationYRef = useRef<number>(0);
  const targetRotationXRef = useRef<number>(0);
  const targetScaleRef = useRef<number>(1.0);

  // Animation states
  const currentRotationYRef = useRef<number>(0);
  const currentRotationXRef = useRef<number>(0);
  const currentScaleRef = useRef<number>(1.0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // 1. Initialize Scene, Camera, Lights and Renderer
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Create scene with soft studio lighting background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f8f9fa'); // light off-white
    scene.fog = new THREE.FogExp2('#f8f9fa', 0.15);
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.5, 4.5);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight('#ffffff', '#8d99ae', 0.4);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight('#ffffff', 0.8);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -3;
    dirLight.shadow.camera.right = 3;
    dirLight.shadow.camera.top = 3;
    dirLight.shadow.camera.bottom = -3;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Subtle soft fill light
    const fillLight = new THREE.DirectionalLight('#e2e8f0', 0.4);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(20, 40, '#cbd5e1', '#f1f5f9');
    gridHelper.position.y = -1;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    // Add a shadow receiving plane
    const planeGeo = new THREE.PlaneGeometry(30, 30);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.1 });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);

    // Model container group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Create default beautiful model
    createDefaultModel(modelGroup);

    // Resize Observer for fluid container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    });
    
    resizeObserver.observe(containerRef.current);

    // Clean up
    return () => {
      resizeObserver.disconnect();
      renderer.dispose();
      // Remove any geometries and materials
      scene.clear();
    };
  }, []);

  // 2. Default model generator (Procedural Modern Sculpt)
  const createDefaultModel = (group: THREE.Group) => {
    // Clear previous model if any
    if (currentModelRef.current) {
      group.remove(currentModelRef.current);
    }

    // Design a gorgeous modern Torus Knot
    const geometry = new THREE.TorusKnotGeometry(0.6, 0.22, 120, 16);
    
    // Modern physical glass-like/metallic material
    const material = new THREE.MeshPhysicalMaterial({
      color: '#4f46e5', // Indigo
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.6, // Semi-translucent glass look
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Center it slightly
    mesh.position.y = 0.2;

    group.add(mesh);
    currentModelRef.current = mesh;

    // Reset rotation targets
    targetRotationYRef.current = 0;
    targetRotationXRef.current = 0;
    targetScaleRef.current = 1.0;
    currentRotationYRef.current = 0;
    currentRotationXRef.current = 0;
    currentScaleRef.current = 1.0;

    // Update parent about loaded model
    onModelLoaded({
      name: 'Default Torus Knot (Procedural)',
      size: 'N/A',
      vertices: geometry.attributes.position.count,
      triangles: geometry.index ? geometry.index.count / 3 : 0,
    });
  };

  // 3. Load uploaded GLB/GLTF model
  useEffect(() => {
    if (!uploadedFile || !modelGroupRef.current) return;

    setIsLoading(true);
    setLoadError(null);

    const loader = new GLTFLoader();
    const fileUrl = URL.createObjectURL(uploadedFile);

    loader.load(
      fileUrl,
      (gltf) => {
        const loadedModel = gltf.scene;

        // Traverse model to configure lighting, materials and calculate counts
        let vertices = 0;
        let triangles = 0;

        loadedModel.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            // Enable material enhancements if wanted
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.shadowSide = THREE.DoubleSide;
            }

            // Calculate metrics
            const geom = child.geometry;
            if (geom) {
              vertices += geom.attributes.position.count;
              if (geom.index) {
                triangles += geom.index.count / 3;
              } else {
                triangles += geom.attributes.position.count / 3;
              }
            }
          }
        });

        // Auto Center and Scale the model
        const box = new THREE.Box3().setFromObject(loadedModel);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Position model so its center is exactly at 0,0,0 inside the group
        loadedModel.position.sub(center);
        
        // Push slightly upwards so it sits on grid (y = -1 is grid)
        // Center is subtracted, so center is now at 0.
        // We want the bottom of the bounding box to rest on the grid (y = -1).
        // Since we centered the model, its local bottom is at -size.y/2.
        // We can offset the loaded model group or container to align bottom perfectly.
        const bottomOffset = -size.y / 2;
        loadedModel.position.y -= bottomOffset; // loadedModel bottom is now at y=0 relative to group
        
        // Scale factor to make max dimension fit ~1.8 units nicely
        const maxDim = Math.max(size.x, size.y, size.z);
        const finalScale = 1.8 / (maxDim || 1);
        loadedModel.scale.setScalar(finalScale);

        // Clear previous model from the group
        if (currentModelRef.current && modelGroupRef.current) {
          modelGroupRef.current.remove(currentModelRef.current);
        }

        // Add to group
        modelGroupRef.current.add(loadedModel);
        currentModelRef.current = loadedModel;

        // Format file size
        const sizeInMb = (uploadedFile.size / (1024 * 1024)).toFixed(2) + ' MB';

        // Notify parent of success
        onModelLoaded({
          name: uploadedFile.name,
          size: sizeInMb,
          vertices,
          triangles: Math.round(triangles),
        });

        // Reset tracking offsets
        targetRotationYRef.current = 0;
        targetRotationXRef.current = 0;
        targetScaleRef.current = 1.0;
        currentRotationYRef.current = 0;
        currentRotationXRef.current = 0;
        currentScaleRef.current = 1.0;

        setIsLoading(false);
        URL.revokeObjectURL(fileUrl);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
        setLoadError('Failed to load 3D model. Make sure it is a valid GLB/GLTF file.');
        setIsLoading(false);
        URL.revokeObjectURL(fileUrl);
      }
    );

    return () => {
      URL.revokeObjectURL(fileUrl);
    };
  }, [uploadedFile]);

  // Listen for custom view reset event
  useEffect(() => {
    const handleReset = () => {
      targetRotationYRef.current = 0;
      targetRotationXRef.current = 0;
      targetScaleRef.current = 1.0;
      currentRotationYRef.current = 0;
      currentRotationXRef.current = 0;
      currentScaleRef.current = 1.0;
    };
    window.addEventListener('reset-three-view', handleReset);
    return () => {
      window.removeEventListener('reset-three-view', handleReset);
    };
  }, []);

  // 4. Listen to Gesture commands and update targets in real-time
  useEffect(() => {
    if (!gesture || gesture.type === 'none') return;

    const zoomSpeed = 0.015 * sensitivity;
    const rotateSpeed = 0.035 * sensitivity;

    switch (gesture.type) {
      case 'open': // Open Hand -> Zoom In
        targetScaleRef.current = Math.min(2.5, targetScaleRef.current + zoomSpeed);
        break;

      case 'fist': // Fist -> Zoom Out
        targetScaleRef.current = Math.max(0.4, targetScaleRef.current - zoomSpeed);
        break;

      case 'move_left': // Hand Moving Left (rawX decreasing) -> Rotate Left (counter-clockwise / negative Y)
        // Since movementX is negative, we rotate negative.
        // Let's scale rotation speed by the magnitude of hand movement to feel organic
        const deltaLeft = Math.abs(gesture.movementX) * 2.5 * sensitivity;
        targetRotationYRef.current -= Math.max(0.01, deltaLeft);
        break;

      case 'move_right': // Hand Moving Right (rawX increasing) -> Rotate Right (clockwise / positive Y)
        const deltaRight = Math.abs(gesture.movementX) * 2.5 * sensitivity;
        targetRotationYRef.current += Math.max(0.01, deltaRight);
        break;
    }
  }, [gesture, sensitivity]);

  // 5. Render Loop (Runs 60FPS) with smooth lerping
  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      const modelGroup = modelGroupRef.current;
      const renderer = rendererRef.current;
      const scene = sceneRef.current;
      const camera = cameraRef.current;

      if (modelGroup && renderer && scene && camera) {
        // Auto rotation when idle or active based on state
        if (autoRotate && gesture.type === 'none') {
          targetRotationYRef.current += 0.003;
        }

        // Lerp rotation (Smooth dampening)
        currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.12;
        currentRotationXRef.current += (targetRotationXRef.current - currentRotationXRef.current) * 0.12;
        currentScaleRef.current += (targetScaleRef.current - currentScaleRef.current) * 0.12;

        // Apply smooth states to group
        modelGroup.rotation.y = currentRotationYRef.current;
        modelGroup.rotation.x = currentRotationXRef.current;
        modelGroup.scale.setScalar(currentScaleRef.current);

        // Render frame
        renderer.render(scene, camera);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate, gesture.type]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100"
      id="three-canvas-container"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full touch-none" id="three-webgl-canvas" />

      {/* Modern minimal loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm z-10 transition-all duration-300">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-slate-200 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-xs font-mono text-slate-500 tracking-wider">LOADING 3D MODEL...</p>
        </div>
      )}

      {/* Modern error message toast */}
      {loadError && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl shadow-sm z-20 flex items-start gap-3 animate-fade-in">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-xs mt-0.5">!</div>
          <div className="flex-1">
            <p className="text-sm font-medium">{loadError}</p>
            <button 
              onClick={() => setLoadError(null)} 
              className="mt-2 text-xs font-semibold underline text-red-700 hover:text-red-900 focus:outline-none"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Visual background indicator */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-slate-400 select-none z-0">
        STUDIO ENVIRONMENT / LIGHT_GRID
      </div>
    </div>
  );
};
