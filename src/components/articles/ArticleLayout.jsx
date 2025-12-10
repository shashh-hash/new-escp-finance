import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMeta } from './ArticleMeta';
import { RelatedArticlesSection } from './RelatedArticlesSection';

export function ArticleLayout({ article, relatedArticles = [] }) {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-[40vh] overflow-hidden relative bg-[#051C2C]">
        {/* Blurred background for fill */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        {/* Main image */}
        <img
          src={article.image}
          alt={article.title}
          className="relative w-full h-full object-contain z-10"
        />
      </div>

      {/* Article Content */}
      <article className="flex-1 py-16">
        <div className="container mx-auto px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/articles"
            className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Articles
          </Link>

          {/* Header + meta */}
          <header className="mb-12">
            <ArticleMeta
              category={article.category}
              readTime={article.readTime}
              title={article.title}
              author={article.author}
              date={article.date}
              series={article.series}
            />
          </header>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            {article.content}
          </div>

          {/* Related */}
          {relatedArticles.length > 0 && (
            <RelatedArticlesSection
              currentSlug={article.slug}
              articles={relatedArticles}
            />
          )}
        </div>
      </article>
    </>
  );
}
