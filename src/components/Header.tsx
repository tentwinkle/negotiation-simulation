import React from 'react';
import { User, LogOut, Clock, ArrowRight } from 'lucide-react';

interface HeaderProps {
  timer: string;
  stage: string;
  nextStage: string;
  userName: string;
}

export const Header: React.FC<HeaderProps> = ({ timer, stage, nextStage, userName }) => {
  return (
    <header className="bg-white border-b-2 border-gray-200 px-8 py-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-xl border-2 border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="text-blue-600\" size={18} />
              <span className="text-sm font-bold text-gray-900">Timer:</span>
              <span className="font-mono text-xl font-black text-blue-600">{timer}</span>
            </div>
            <div className="text-sm text-gray-700">
              Stage: <span className="font-bold text-gray-900 text-base">{stage}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-sm font-medium">Next Stage:</span>
            <ArrowRight size={16} className="text-gray-400" />
            <span className="font-bold text-gray-900">{nextStage}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
            <div className="p-1 bg-blue-500 rounded-full">
              <User size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">{userName}</span>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-red-200">
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};