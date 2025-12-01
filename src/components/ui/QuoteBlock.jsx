import React from 'react';
import clsx from 'clsx';

export function QuoteBlock({ children, className }) {
  return (
    <div
      className={clsx(
        'bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border-l-4 border-[#C5A059] p-6 mt-8 rounded-r-2xl',
        className
      )}
    >
      <p className="text-sm text-gray-300 italic">
        {children}
      </p>
    </div>
  );
}
