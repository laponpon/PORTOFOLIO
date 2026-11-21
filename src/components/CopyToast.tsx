import React from 'react';

interface CopyToastProps {
  visible: boolean;
  message: string;
}

export const CopyToast: React.FC<CopyToastProps> = ({ visible, message }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-none flex items-center gap-3 bg-bg-card border border-accent/40 px-5 py-3 rounded-full shadow-2xl shadow-accent/20 backdrop-blur-md ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
      <span className="text-xs uppercase font-bold tracking-wider text-text-main whitespace-nowrap">
        {message}
      </span>
    </div>
  );
};
