import React from 'react';

interface BtnSMProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const BtnSM = ({ children, onClick, active }: BtnSMProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-28 h-9 rounded-md text-sm font-medium transition-colors
        ${active
          ? 'bg-blue-600 text-white'
          : 'bg-blue-900 text-white hover:bg-blue-950'
        }`}
    >
      {children}
    </button>
  );
};

export default BtnSM;