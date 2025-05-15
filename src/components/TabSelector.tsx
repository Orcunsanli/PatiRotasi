import React from 'react';
import { TabType } from '../types';

interface TabSelectorProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="flex space-x-1 rounded-xl bg-gray-200 p-1">
      <button
        className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5
          ${activeTab === 'owner'
            ? 'bg-white text-blue-700 shadow'
            : 'text-gray-700 hover:bg-white/[0.12] hover:text-gray-800'
          }`}
        onClick={() => onTabChange('owner')}
      >
        Köpek Sahipleri
      </button>
      <button
        className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5
          ${activeTab === 'walker'
            ? 'bg-white text-blue-700 shadow'
            : 'text-gray-700 hover:bg-white/[0.12] hover:text-gray-800'
          }`}
        onClick={() => onTabChange('walker')}
      >
        Köpek Gezdiriciler
      </button>
    </div>
  );
}