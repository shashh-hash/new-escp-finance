import React from 'react';

export function ArticleMeta({ category, readTime, title, author, date, series }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        {category && (
          <span className="text-xs uppercase tracking-wider text-gray-500">
            {category}
          </span>
        )}
        {readTime && (
          <>
            <span className="text-xs text-gray-600">•</span>
            <span className="text-xs text-gray-500">{readTime}</span>
          </>
        )}
      </div>
      {series && (
        <div className="mb-3">
          <span className="text-sm font-light text-gray-400">{series}</span>
        </div>
      )}
      <h1 className="text-5xl font-light tracking-tight text-white mb-6">
        {title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        {author && <span>By {author}</span>}
        {date && (
          <>
            <span>•</span>
            <span>{date}</span>
          </>
        )}
      </div>
    </>
  );
}
