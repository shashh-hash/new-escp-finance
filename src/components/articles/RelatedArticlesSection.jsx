import React from 'react';
import { Link } from 'react-router-dom';

export function RelatedArticlesSection({ articles, currentSlug }) {
  const related = articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 2);

  if (!related.length) return null;

  return (
    <section className="mt-16 pt-16 border-t border-white/10">
      <h3 className="text-2xl font-light text-white mb-8">
        Related Articles
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {related.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="group"
          >
            <div className="aspect-video overflow-hidden bg-[#042440] mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
              {article.title}
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              {article.author} • {article.date}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
