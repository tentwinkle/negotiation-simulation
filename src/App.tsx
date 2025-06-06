import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FirstTimeGuidance } from './components/FirstTimeGuidance';
import { InputField } from './components/InputField';
import { ValuationPanel } from './components/ValuationPanel';
import { VideoModal } from './components/VideoModal';
import { DocumentModal } from './components/DocumentModal';
import { useTimer } from './hooks/useTimer';
import { InputField as InputFieldType, TeamRole, SimulationData } from './types';
import { Send } from 'lucide-react';

function App() {
  const timer = useTimer();
  
  // Team role configuration - Team 1 can modify values, Team 2 can toggle status
  const teamRole: TeamRole = {
    canModifyValues: true, // Team 1
    canToggleStatus: false, // Team 2 only
  };

  // Alternative team role for Team 2 testing
  // const teamRole: TeamRole = {
  //   canModifyValues: false, // Team 2 cannot modify
  //   canToggleStatus: true,  // Team 2 can toggle
  // };

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Initialize first-time guidance state from localStorage
  useEffect(() => {
    const hasSeenGuidance = localStorage.getItem('hasSeenGuidance');
    setIsFirstTime(!hasSeenGuidance);
  }, []);

  const handleGuidanceToggle = (isExpanded: boolean) => {
    if (isExpanded && isFirstTime) {
      localStorage.setItem('hasSeenGuidance', 'true');
      setIsFirstTime(false);
    }
  };

  const [inputFields, setInputFields] = useState<InputFieldType[]>([
    {
      id: 'ebitda',
      label: 'EBITDA',
      value: 10000000,
      type: 'number',
      status: 'OK',
    },
    {
      id: 'interestRate',
      label: 'Interest Rate',
      value: 20,
      type: 'number',
      status: 'TBD',
    },
    {
      id: 'multiple',
      label: 'Multiple',
      value: 10,
      type: 'number',
      status: 'OK',
    },
    {
      id: 'factorScore',
      label: 'Factor Score',
      value: 2,
      type: 'slider',
      status: 'TBD',
      min: 1,
      max: 5,
      step: 1,
    },
    {
      id: 'companyName',
      label: 'Company Name',
      value: 'ABC Corp.',
      type: 'text',
      status: 'OK',
    },
    {
      id: 'description',
      label: 'Description',
      value: "This is the company's description. This company is #1!",
      type: 'textarea',
      status: 'TBD',
    },
  ]);

  const handleInputChange = (id: string, value: string | number) => {
    setInputFields(prev =>
      prev.map(field =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  const handleStatusToggle = (id: string) => {
    setInputFields(prev =>
      prev.map(field =>
        field.id === id
          ? { ...field, status: field.status === 'TBD' ? 'OK' : 'TBD' }
          : field
      )
    );
  };

  // Calculate valuation using the exact formula: EBITDA × Multiple × Factor Score
  const ebitda = inputFields.find(f => f.id === 'ebitda')?.value as number || 0;
  const multiple = inputFields.find(f => f.id === 'multiple')?.value as number || 0;
  const factorScore = inputFields.find(f => f.id === 'factorScore')?.value as number || 1;
  
  const valuation = ebitda * multiple * factorScore;
  const percentage = 20; // Mock percentage for pie chart

  const handleSubmitProposal = () => {
    // Mock submission - in real app this would send data to server
    alert('Proposal submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        timer={timer}
        stage="ANALYSIS"
        nextStage="STRUCTURING - 1 hour"
        userName="John Doe"
      />
      
      <div className="flex">
        <Sidebar
          onVideoClick={() => setShowVideoModal(true)}
          onDocumentClick={() => setShowDocumentModal(true)}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <FirstTimeGuidance 
              isFirstTime={isFirstTime}
              onToggle={handleGuidanceToggle}
            />
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {inputFields.map(field => (
                    <InputField
                      key={field.id}
                      field={field}
                      teamRole={teamRole}
                      onChange={handleInputChange}
                      onStatusToggle={handleStatusToggle}
                    />
                  ))}
                </div>
                
                <div className="flex justify-center pt-6">
                  <button 
                    onClick={handleSubmitProposal}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 border border-blue-500"
                  >
                    <Send size={24} />
                    <span>SUBMIT PROPOSAL</span>
                  </button>
                </div>
              </div>
              
              <div className="xl:col-span-1">
                <ValuationPanel valuation={valuation} percentage={percentage} />
              </div>
            </div>
          </div>
        </main>
      </div>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
      
      <DocumentModal
        isOpen={showDocumentModal}
        onClose={() => setShowDocumentModal(false)}
      />
    </div>
  );
}

export default App;