/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GestureType } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, RotateCw, Hand } from 'lucide-react';

interface GestureGuideProps {
  currentGesture: GestureType;
}

export const GestureGuide: React.FC<GestureGuideProps> = ({ currentGesture }) => {
  const guides = [
    {
      type: 'open' as GestureType,
      icon: <ZoomIn size={16} className="text-indigo-600" />,
      title: '张开手指 (Spread)',
      description: '放大模型 (Scale Up)',
      symbol: '🖐️',
    },
    {
      type: 'fist' as GestureType,
      icon: <ZoomOut size={16} className="text-amber-600" />,
      title: '紧握拳头 (Fist)',
      description: '缩小模型 (Scale Down)',
      symbol: '✊',
    },
    {
      type: 'move_left' as GestureType,
      icon: <RotateCcw size={16} className="text-sky-600" />,
      title: '手往左移动 (Left)',
      description: '左旋转模型 (Rotate Left)',
      symbol: '⬅️',
    },
    {
      type: 'move_right' as GestureType,
      icon: <RotateCw size={16} className="text-sky-600" />,
      title: '手往右移动 (Right)',
      description: '右旋转模型 (Rotate Right)',
      symbol: '➡️',
    },
  ];

  return (
    <div className="flex flex-col gap-2.5" id="gesture-guide-section">
      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
        <Hand size={14} className="text-slate-400" /> Gesture Control Guide
      </label>

      <div className="grid grid-cols-1 gap-2" id="gesture-guide-list">
        {guides.map((guide) => {
          const isActive = currentGesture === guide.type;
          return (
            <div
              key={guide.type}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-50 border-indigo-200 shadow-sm scale-[1.01]'
                  : 'bg-white border-slate-100 hover:border-slate-200'
              }`}
              id={`guide-item-${guide.type}`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-indigo-100/80 text-indigo-700' : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  {guide.icon}
                </div>
                <div>
                  <p className={`text-xs font-semibold ${isActive ? 'text-indigo-900' : 'text-slate-700'}`}>
                    {guide.title}
                  </p>
                  <p className={`text-[10px] ${isActive ? 'text-indigo-600/90 font-medium' : 'text-slate-400'}`}>
                    {guide.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {isActive && (
                  <span className="text-[10px] bg-indigo-600 text-white font-mono font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                    ACTIVE
                  </span>
                )}
                <span className="text-base select-none">{guide.symbol}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
