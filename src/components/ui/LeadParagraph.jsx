import React from 'react';
import clsx from 'clsx';

export function LeadParagraph({ children, className }) {
  return (
    <p
      className={clsx(
        'text-xl text-gray-200 leading-relaxed mb-8 font-light',
        className
      )}
    >
      {children}
    </p>
  );
}
