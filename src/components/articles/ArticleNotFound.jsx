import React from 'react';
import { Link } from 'react-router-dom';

export function ArticleNotFound() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-light text-white mb-4">
          Article Not Found
        </h1>
        <Link
          to="/articles"
          className="text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
}
