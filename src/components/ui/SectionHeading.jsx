import React from 'react';
import clsx from 'clsx';

export function SectionHeading({ children, className }) {
  return (
    <h2
      className={clsx(
        'text-3xl font-light text-white mb-6 mt-12',
        className
      )}
    >
      {children}
    </h2>
  );
}
