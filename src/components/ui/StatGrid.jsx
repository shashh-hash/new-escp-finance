import React from 'react';
import clsx from 'clsx';

export function StatGrid({ children, className, columns = 'md:grid-cols-2' }) {
  return (
    <div className={clsx('grid gap-6', columns, className)}>
      {children}
    </div>
  );
}

export function StatCard({ value, label, helper }) {
  return (
    <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-2xl">
      <div className="text-4xl font-light text-[#C5A059] mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
      {helper && (
        <div className="text-xs text-gray-500 mt-2">
          {helper}
        </div>
      )}
    </div>
  );
}
