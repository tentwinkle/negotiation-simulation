import React from 'react';
import { Modal } from './Modal';
import { FileText, Info, Users, Calculator, Clock, Shield } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Simulation Documentation">
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Info className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-2 text-lg">Platform Overview</h4>
              <p className="text-blue-800 leading-relaxed">
                This simulation enables two teams to negotiate deal terms in real-time with role-based permissions. 
                Team 1 controls input modifications while Team 2 manages approval workflows. All calculations 
                update dynamically to provide immediate feedback on deal implications.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="p-2 bg-green-500 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-green-900 mb-2 text-lg">Team Roles & Permissions</h4>
              <p className="text-green-800 leading-relaxed">
                <strong>Team 1:</strong> Can modify all input values and see real-time calculations. 
                <strong>Team 2:</strong> Reviews proposals and toggles approval status between TBD and OK. 
                This separation ensures proper review processes and prevents unauthorized changes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Calculator className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-purple-900 mb-2 text-lg">Valuation Formula</h4>
              <p className="text-purple-800 leading-relaxed">
                Company valuation = EBITDA × Multiple × Factor Score. Changes to any input automatically 
                update the displayed valuation and ownership charts. The system provides both detailed 
                and simplified currency formatting for easy comprehension.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Clock className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-2 text-lg">Stage Management</h4>
              <p className="text-amber-800 leading-relaxed">
                The simulation progresses through defined stages with time tracking. Monitor the timer 
                and prepare for stage transitions. Each stage may have different requirements and 
                available actions for optimal negotiation flow.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-200">
            <div className="p-2 bg-red-500 rounded-lg">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-red-900 mb-2 text-lg">Best Practices</h4>
              <p className="text-red-800 leading-relaxed">
                Use clear communication, review all terms carefully before approval, and leverage 
                real-time calculations to understand deal implications. The TBD/OK status system 
                helps track negotiation progress and ensures nothing is overlooked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};