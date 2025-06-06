export interface InputField {
  id: string;
  label: string;
  value: string | number;
  type: 'text' | 'number' | 'textarea' | 'slider';
  status: 'TBD' | 'OK';
  min?: number;
  max?: number;
  step?: number;
}

export interface TeamRole {
  canModifyValues: boolean;
  canToggleStatus: boolean;
}

export interface SimulationData {
  ebitda: number;
  interestRate: number;
  multiple: number;
  factorScore: number;
  companyName: string;
  description: string;
}