const fs = require('fs');
const html = fs.readFileSync('input_article.html', 'utf-8');

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
jsx = jsx.replace(/<hr([^>]*)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<hr${p1}/>`;
});

jsx = jsx.replace(/text-primary/g, 'text-article-primary');
jsx = jsx.replace(/bg-primary/g, 'bg-article-primary');
jsx = jsx.replace(/border-primary/g, 'border-article-primary');
jsx = jsx.replace(/ring-primary/g, 'ring-article-primary');
jsx = jsx.replace(/shadow-primary/g, 'shadow-article-primary');
jsx = jsx.replace(/from-primary/g, 'from-article-primary');
jsx = jsx.replace(/to-primary/g, 'to-article-primary');
jsx = jsx.replace(/outline-primary/g, 'outline-article-primary');

jsx = jsx.replace(/bg-background-light/g, 'bg-article-bg-light');
jsx = jsx.replace(/bg-background-dark/g, 'bg-article-bg-dark');

// SVG conversions
jsx = jsx.replace(/<svg([^>]*)>/g, (match, p1) => {
    if (p1.includes('viewbox=')) {
        p1 = p1.replace(/viewbox=/g, 'viewBox=');
    }
    return `<svg${p1}>`;
});
jsx = jsx.replace(/clip-rule/g, 'clipRule');
jsx = jsx.replace(/fill-rule/g, 'fillRule');
jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
jsx = jsx.replace(/stroke-width/g, 'strokeWidth');

// Fix inline styles
jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (styleString.includes('background-image')) {
        let urlMatch = styleString.match(/url\('([^']+)'\)/);
        if (urlMatch) {
            return `style={{ backgroundImage: "url('" + "${urlMatch[1]}" + "')" }}`;
        }
    }
    return match;
});

// Extract body
const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : jsx;

bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const component = `import React from 'react';

export default function ArticleDetail() {
  return (
    <div className="bg-article-bg-light text-[#111812] font-display antialiased flex flex-col min-h-screen" style={{ fontFamily: "'Noto Serif', serif" }}>
      <style>{\`
        .article-wrapper .font-sans {
            font-family: 'Noto Sans', sans-serif;
        }
        .article-wrapper .font-display, .article-wrapper .font-serif {
            font-family: 'Noto Serif', serif;
        }
      \`}</style>
      <div className="article-wrapper flex-grow w-full">
      ${bodyContent}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/ArticleDetail.tsx', component);
console.log('Done!');
