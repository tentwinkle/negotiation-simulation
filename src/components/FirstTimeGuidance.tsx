import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface FirstTimeGuidanceProps {
  isFirstTime: boolean;
  onToggle: (isExpanded: boolean) => void;
}

export const FirstTimeGuidance: React.FC<FirstTimeGuidanceProps> = ({ isFirstTime, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(isFirstTime);

  useEffect(() => {
    setIsExpanded(isFirstTime);
  }, [isFirstTime]);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle(newExpanded);
  };

  const guidanceText = `Welcome to the Negotiation Simulation Platform! This interactive tool enables two teams to collaborate on deal terms in real-time. Team 1 has the ability to modify input values and see dynamic calculations, while Team 2 can review proposals and toggle approval status between "TBD" (To Be Determined) and "OK". The company valuation is calculated automatically using the formula: EBITDA × Multiple × Factor Score. Use the sidebar buttons to access helpful resources including video tutorials and comprehensive documentation. Monitor the timer and stage progression as you work through each phase of the negotiation process. All changes are reflected instantly in the valuation panel and ownership charts.`;

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl shadow-lg mb-8 overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-all duration-200 group"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
            <Info className="text-blue-600" size={20} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">First Time Guidance</h3>
          {isFirstTime && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {isExpanded ? (
            <ChevronUp className="text-gray-500 group-hover:text-blue-600 transition-colors\" size={24} />
          ) : (
            <ChevronDown className="text-gray-500 group-hover:text-blue-600 transition-colors" size={24} />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-8 pb-6 border-t border-blue-100">
          <div className="bg-blue-50 p-6 rounded-lg mt-4">
            <p className="text-gray-800 leading-relaxed text-lg">
              {guidanceText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};