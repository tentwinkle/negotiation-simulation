import React from 'react';
import { Play, FileText } from 'lucide-react';

interface SidebarProps {
  onVideoClick: () => void;
  onDocumentClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onVideoClick, onDocumentClick }) => {
  return (
    <div className="w-20 bg-gradient-to-b from-gray-50 to-gray-100 border-r-2 border-gray-200 flex flex-col items-center py-8 space-y-6">
      <button
        onClick={onVideoClick}
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        title="Watch Training Video"
      >
        <Play size={24} fill="currentColor" />
      </button>
      
      <button
        onClick={onDocumentClick}
        className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        title="View Documentation"
      >
        <FileText size={24} />
      </button>
    </div>
  );
};