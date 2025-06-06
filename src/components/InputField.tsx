import React from 'react';
import { InputField as InputFieldType, TeamRole } from '../types';
import { Lock } from 'lucide-react';

interface InputFieldProps {
  field: InputFieldType;
  teamRole: TeamRole;
  onChange: (id: string, value: string | number) => void;
  onStatusToggle: (id: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  field,
  teamRole,
  onChange,
  onStatusToggle,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = field.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value;
    onChange(field.id, value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field.id, parseInt(e.target.value));
  };

  const renderSlider = () => {
    const min = field.min || 1;
    const max = field.max || 5;
    const value = field.value as number;
    const progressPercentage = ((value - min) / (max - min)) * 100;

    return (
      <div className="space-y-4">
        <div className="slider-container relative">
          {/* Blue progress track */}
          <div 
            className="slider-progress"
            style={{ width: `${progressPercentage}%` }}
          />
          
          {/* Track dots */}
          <div className="slider-dots">
            {Array.from({ length: max - min + 1 }, (_, i) => {
              const dotValue = min + i;
              const dotPosition = (i / (max - min)) * 100;
              return (
                <div
                  key={dotValue}
                  className={`slider-dot ${dotValue <= value ? 'active' : ''}`}
                  style={{ left: `${dotPosition}%` }}
                />
              );
            })}
          </div>
          
          {/* Slider input */}
          <input
            type="range"
            min={min}
            max={max}
            step={field.step || 1}
            value={value}
            onChange={handleSliderChange}
            disabled={!teamRole.canModifyValues}
            className="slider w-full relative z-10"
          />
        </div>
        
        {/* Value labels */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>{min}</span>
          <span className="font-bold text-gray-900 text-lg">{value}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  };

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={field.value}
            onChange={handleInputChange}
            disabled={!teamRole.canModifyValues}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:bg-gray-50 disabled:text-gray-500 transition-all duration-200 text-base"
            rows={3}
            placeholder="Enter description..."
          />
        );
      
      case 'slider':
        return renderSlider();
      
      default:
        return (
          <input
            type={field.type}
            value={field.value}
            onChange={handleInputChange}
            disabled={!teamRole.canModifyValues}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 transition-all duration-200 text-base font-medium"
            placeholder={`Enter ${field.label.toLowerCase()}...`}
          />
        );
    }
  };

  const formatDisplayValue = () => {
    if (field.type === 'number' && field.id === 'ebitda') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(field.value as number);
    }
    if (field.type === 'number' && field.id === 'interestRate') {
      return `${field.value}%`;
    }
    if (field.type === 'number' && field.id === 'multiple') {
      return `${field.value}x`;
    }
    return field.value;
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            {field.label}:
          </label>
          {!teamRole.canModifyValues && (
            <Lock className="text-gray-400" size={16} />
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onStatusToggle(field.id)}
            disabled={!teamRole.canToggleStatus}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 transform hover:scale-105 ${
              field.status === 'TBD'
                ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-2 border-amber-300'
                : 'bg-green-100 text-green-800 hover:bg-green-200 border-2 border-green-300'
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          >
            {field.status}
          </button>
        </div>
      </div>
      
      {field.type !== 'slider' && (
        <div className="mb-3 text-lg font-bold text-blue-600">
          {formatDisplayValue()}
        </div>
      )}
      
      {renderInput()}
    </div>
  );
};