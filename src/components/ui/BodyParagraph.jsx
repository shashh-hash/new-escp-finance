import React from 'react';
import clsx from 'clsx';

export function BodyParagraph({ children, className }) {
  return (
    <p
      className={clsx(
        'text-gray-300 leading-relaxed mb-6',
        className
      )}
    >
      {children}
    </p>
  );
}
