
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/data/siteData.js';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML = path.resolve(DIST_DIR, 'index.html');

async function prerender() {
    console.log('Starting prerender...');

    if (!fs.existsSync(INDEX_HTML)) {
        console.error('Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    const template = fs.readFileSync(INDEX_HTML, 'utf-8');

    // Ensure articles directory exists in dist (though we write to subfolders typically)
    // We want URLs to look like /articles/slug, so we need dist/articles/slug/index.html

    for (const article of articles) {
        const slug = article.slug;
        const articleDir = path.join(DIST_DIR, 'articles', slug);

        if (!fs.existsSync(articleDir)) {
            fs.mkdirSync(articleDir, { recursive: true });
        }

        // Replace meta tags in valid HTML
        // Note: We are doing simple string replacement on the build template.
        // For a robust solution, one might use a parser, but this is sufficient for meta tags.

        // 1. Add OG Tags
        const ogTags = `
      <title>${article.title} | ESCP Finance Society</title>
      <meta name="description" content="${article.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${article.title.replace(/"/g, '&quot;')}" />
      <meta property="og:description" content="${article.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="og:image" content="https://escp-students-for-finance.github.io/new-escp-finance${article.image}" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="${article.title.replace(/"/g, '&quot;')}" />
      <meta property="twitter:description" content="${article.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="twitter:image" content="https://escp-students-for-finance.github.io/new-escp-finance${article.image}" />
    `;

        // Inject into <head>
        // We look for the closing </head> tag and prepend our tags
        // Inject into <head>
        // We look for the closing </head> tag and prepend our tags
        let htmlWithMeta = template.replace('</head>', `${ogTags}</head>`);

        // Fix relative paths for assets since we are 2 levels deep
        // Replaces src="./" with src="../../" and href="./" with href="../../"
        htmlWithMeta = htmlWithMeta.replace(/src="\.\//g, 'src="../../');
        htmlWithMeta = htmlWithMeta.replace(/href="\.\//g, 'href="../../');

        const finalPath = path.join(articleDir, 'index.html');
        fs.writeFileSync(finalPath, htmlWithMeta);

        console.log(`Prerendered: articles/${slug}/index.html`);
    }

    console.log('Prerender complete.');
}

prerender();
