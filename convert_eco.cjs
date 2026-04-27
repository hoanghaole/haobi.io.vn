const fs = require('fs');
const html = fs.readFileSync('input_eco.html', 'utf-8');

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
    // Basic conversion for background-image
    if (styleString.includes('background-image')) {
        let urlMatch = styleString.match(/url\('([^']+)'\)/);
        if (urlMatch) {
            return `style={{ backgroundImage: "url('" + "${urlMatch[1]}" + "')" }}`;
        }
    }
    return match; // return as is if not easily parsable to generic react style
});

jsx = jsx.replace(/text-primary/g, 'text-eco-primary');
jsx = jsx.replace(/bg-primary/g, 'bg-eco-primary');
jsx = jsx.replace(/border-primary/g, 'border-eco-primary');
jsx = jsx.replace(/ring-primary/g, 'ring-eco-primary');
jsx = jsx.replace(/shadow-primary/g, 'shadow-eco-primary');
jsx = jsx.replace(/from-primary/g, 'from-eco-primary');
jsx = jsx.replace(/to-primary/g, 'to-eco-primary');
jsx = jsx.replace(/outline-primary/g, 'outline-eco-primary');

// Extract body
const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : jsx;

bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const component = `import React from 'react';

export default function EcoHubPage() {
  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      ${bodyContent}
    </div>
  );
}
`;

fs.writeFileSync('src/pages/EcoHubPage.tsx', component);
console.log('Done!');
