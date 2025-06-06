import React from 'react';
import { TrendingUp, PieChart } from 'lucide-react';

interface ValuationPanelProps {
  valuation: number;
  percentage: number;
}

export const ValuationPanel: React.FC<ValuationPanelProps> = ({ valuation, percentage }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLargeCurrency = (amount: number) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return formatCurrency(amount);
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-xl">
            <TrendingUp className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-bold">Company Valuation</h3>
        </div>
        <div className="text-4xl font-black mb-2">
          {formatLargeCurrency(valuation)}
        </div>
        <div className="text-sm text-blue-100 font-medium">
          {formatCurrency(valuation)}
        </div>
        <p className="text-sm text-blue-200 mt-4 font-medium">
          Formula: EBITDA × Multiple × Factor Score
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <PieChart className="text-purple-600" size={24} />
          </div>
          <h4 className="text-xl font-bold text-gray-900">Ownership Distribution</h4>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-56 h-56">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="12"
                strokeDasharray={`${percentage * 2.199} ${(100 - percentage) * 2.199}`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-500 font-medium">Your Share</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-bold text-gray-700">Your Share</span>
            </div>
            <span className="text-lg font-black text-blue-600">{percentage}%</span>
          </div>
          <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-sm font-bold text-gray-700">Remaining</span>
            </div>
            <span className="text-lg font-black text-gray-600">{100 - percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};