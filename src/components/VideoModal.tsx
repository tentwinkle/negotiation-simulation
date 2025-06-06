import React from 'react';
import { Modal } from './Modal';
import { Play, Clock, Users, Calculator } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Training Video Tutorial">
      <div className="space-y-6">
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border-2 border-gray-700">
          <div className="text-center text-white">
            <div className="p-4 bg-blue-600 rounded-full inline-block mb-4">
              <Play size={48} className="text-white" fill="currentColor" />
            </div>
            <p className="text-2xl font-bold mb-2">Negotiation Simulation Tutorial</p>
            <p className="text-lg opacity-75">Comprehensive Training Video</p>
            <p className="text-sm opacity-60 mt-2">Duration: 15 minutes</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-3 text-lg">What You'll Learn:</h4>
          <div className="grid gap-3">
            <div className="flex items-start space-x-3">
              <Users className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-blue-900">Team Roles & Permissions</p>
                <p className="text-blue-800 text-sm">Understanding how Team 1 and Team 2 interact differently with the simulation interface.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Calculator className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-blue-900">Dynamic Calculations</p>
                <p className="text-blue-800 text-sm">How the valuation formula works and responds to input changes in real-time.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-blue-900">Stage Management</p>
                <p className="text-blue-800 text-sm">Navigating through different negotiation phases and time management strategies.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-gray-600">
          <p className="text-sm leading-relaxed">
            This tutorial provides step-by-step guidance on using the negotiation simulation platform effectively. 
            Learn best practices for collaboration, understand the approval workflow, and master the dynamic 
            valuation system. Perfect for first-time users and teams looking to optimize their negotiation process.
          </p>
        </div>
      </div>
    </Modal>
  );
};