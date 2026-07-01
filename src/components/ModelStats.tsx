/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ModelInfo } from '../types';
import { Info, Cpu, Layers, Disc } from 'lucide-react';

interface ModelStatsProps {
  info: ModelInfo | null;
}

export const ModelStats: React.FC<ModelStatsProps> = ({ info }) => {
  if (!info) return null;

  return (
    <div className="flex flex-col gap-2" id="model-stats-section">
      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
        <Info size={14} className="text-slate-400" /> Model Statistics
      </label>

      <div className="grid grid-cols-2 gap-2 bg-slate-50 border border-slate-100 p-3.5 rounded-xl" id="model-stats-grid">
        <div className="col-span-2 flex flex-col border-b border-slate-100 pb-2 mb-1">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Loaded Model</span>
          <span className="text-xs font-bold text-slate-800 truncate" title={info.name}>
            {info.name}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
            <Cpu size={11} />
            <span>Vertices</span>
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono">
            {info.vertices ? info.vertices.toLocaleString() : 'N/A'}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
            <Layers size={11} />
            <span>Triangles</span>
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono">
            {info.triangles ? info.triangles.toLocaleString() : 'N/A'}
          </span>
        </div>

        <div className="flex flex-col gap-0.5 mt-1.5">
          <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
            <Disc size={11} />
            <span>File Size</span>
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono">{info.size}</span>
        </div>

        <div className="flex flex-col gap-0.5 mt-1.5">
          <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>Status</span>
          </div>
          <span className="text-xs font-semibold text-indigo-600">Ready</span>
        </div>
      </div>
    </div>
  );
};
