/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Upload, X, Box } from 'lucide-react';

interface ModelUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
}

export const ModelUpload: React.FC<ModelUploadProps> = ({
  onFileSelect,
  selectedFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        onFileSelect(file);
      } else {
        alert('Please select a valid .glb or .gltf file.');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
        onFileSelect(file);
      } else {
        alert('Please upload a valid .glb or .gltf file.');
      }
    }
  };

  const handleContainerClick = () => {
    if (fileInputRef.current && !selectedFile) {
      fileInputRef.current.click();
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-2" id="model-upload-section">
      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
        <Upload size={14} className="text-slate-400" /> Upload 3D Model
      </label>

      <div
        onClick={handleContainerClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center p-5 rounded-xl border-2 border-dashed transition-all duration-200 text-center select-none ${
          selectedFile
            ? 'border-emerald-200 bg-emerald-50/20'
            : isDragOver
            ? 'border-indigo-500 bg-indigo-50/30'
            : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 cursor-pointer'
        }`}
        id="upload-drag-area"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".glb,.gltf"
          onChange={handleFileChange}
          className="hidden"
          id="glb-file-input"
        />

        {selectedFile ? (
          <div className="flex items-center justify-between w-full gap-3" id="uploaded-file-info">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Box size={18} />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs font-semibold text-slate-700 truncate max-w-[150px] md:max-w-[180px]">
                  {selectedFile.name}
                </p>
                <p className="text-[10px] text-slate-400 font-mono">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClear}
              className="p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-lg transition-all cursor-pointer"
              title="Reset to default model"
              id="clear-model-btn"
            >
              <X size={15} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-2">
            <Upload 
              size={24} 
              className={`mb-2 transition-transform duration-300 ${
                isDragOver ? 'translate-y-[-4px] text-indigo-500' : 'text-slate-400'
              }`} 
            />
            <p className="text-xs font-semibold text-slate-600">
              Drag & drop GLB file or <span className="text-indigo-600 underline decoration-indigo-200">browse</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              Supports GLB or GLTF format up to 50MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
