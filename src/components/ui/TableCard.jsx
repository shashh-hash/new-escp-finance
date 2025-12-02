import React from 'react';
import clsx from 'clsx';

export function TableCard({
  title,
  caption,
  header,
  rows,
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

      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm min-w-full">
          {header && (
            <thead>
              <tr className="border-b border-white/10">
                {header.map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 text-gray-400 font-medium pr-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="text-gray-300">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={
                  idx !== rows.length - 1
                    ? 'border-b border-white/5'
                    : undefined
                }
              >
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="py-3 pr-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <p className="text-xs text-gray-500 mt-4">
          {caption}
        </p>
      )}
    </div>
  );
}
