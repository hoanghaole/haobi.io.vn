const fs = require('fs');
const html = fs.readFileSync('input_blog.html', 'utf-8');

let jsx = html.replace(/class="/g, 'className="');
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/<img([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1}/>`;
});
jsx = jsx.replace(/<input([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1}/>`;
});

// Since the new page has its own color scheme, we want to isolate it from the main tailwind config
jsx = jsx.replace(/text-primary-light/g, 'text-blog-primary-light');
jsx = jsx.replace(/bg-primary-light/g, 'bg-blog-primary-light');
jsx = jsx.replace(/text-primary/g, 'text-blog-primary');
jsx = jsx.replace(/bg-primary/g, 'bg-blog-primary');
jsx = jsx.replace(/border-primary/g, 'border-blog-primary');
jsx = jsx.replace(/ring-primary/g, 'ring-blog-primary');
jsx = jsx.replace(/shadow-primary/g, 'shadow-blog-primary');
jsx = jsx.replace(/from-primary/g, 'from-blog-primary');
jsx = jsx.replace(/to-primary/g, 'to-blog-primary');
jsx = jsx.replace(/outline-primary/g, 'outline-blog-primary');

jsx = jsx.replace(/text-secondary/g, 'text-blog-secondary');
jsx = jsx.replace(/bg-secondary/g, 'bg-blog-secondary');

jsx = jsx.replace(/bg-background-light/g, 'bg-blog-bg-light');
jsx = jsx.replace(/bg-background-dark/g, 'bg-blog-bg-dark');
jsx = jsx.replace(/bg-surface-light/g, 'bg-blog-surface-light');
jsx = jsx.replace(/border-surface-light/g, 'border-blog-surface-light');

jsx = jsx.replace(/text-text-main/g, 'text-blog-text-main');
jsx = jsx.replace(/text-text-muted/g, 'text-blog-text-muted');

// Extract body
const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : jsx;

bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Extract specific fonts from head if needed but we'll apply them generally to a wrapper
const component = `import React from 'react';

export default function BlogHomePage() {
  return (
    <div className="bg-blog-bg-light text-blog-text-main flex min-h-screen flex-col overflow-x-hidden antialiased selection:bg-blog-primary/20 selection:text-blog-primary" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      \n      {/* Wrapper to handle font families for headings if possible, or just rely on CSS */}
      <style>{\`
        .blog-wrapper h1, .blog-wrapper h2, .blog-wrapper h3, .blog-wrapper h4, .blog-wrapper h5, .blog-wrapper h6 {
            font-family: 'Noto Serif', serif;
        }
        .blog-wrapper .font-display {
            font-family: 'Noto Serif', serif;
        }
      \`}</style>
      <div className="blog-wrapper w-full flex-grow">
      ${bodyContent}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/BlogHomePage.tsx', component);
console.log('Done!');
