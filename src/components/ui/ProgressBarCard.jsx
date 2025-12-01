import React from 'react';
import clsx from 'clsx';

export function ProgressBarCard({
  title,
  children,
  totalLabel,
  caption,
  className,
}) {
  return (
    <div
      className={clsx(
        'bg-[#042440] border border-white/10 p-6 rounded-2xl',
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-medium text-white mb-4">
          {title}
        </h3>
      )}

      <div className="space-y-4">{children}</div>

      {totalLabel && (
        <p className="text-xs text-gray-500 mt-4">
          {totalLabel}
        </p>
      )}

      {caption && (
        <p className="text-xs text-gray-500 mt-2">
          {caption}
        </p>
      )}
    </div>
  );
}

export function ProgressBarRow({
  label,
  value,
  percentage,
  helper,
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">{label}</span>
        <span className="text-[#C5A059]">{value}</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2">
        <div
          className="bg-[#C5A059] h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {helper && (
        <p className="text-xs text-gray-500 mt-1">
          {helper}
        </p>
      )}
    </div>
  );
}
