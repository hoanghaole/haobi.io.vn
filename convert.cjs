const fs = require('fs');
const html = fs.readFileSync('input.html', 'utf-8');

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
// Or we can just add these classes to tailwind.config.js. It's safer to prefix them.
jsx = jsx.replace(/text-primary/g, 'text-hms-primary');
jsx = jsx.replace(/bg-primary/g, 'bg-hms-primary');
jsx = jsx.replace(/border-primary/g, 'border-hms-primary');
jsx = jsx.replace(/ring-primary/g, 'ring-hms-primary');
jsx = jsx.replace(/shadow-primary/g, 'shadow-hms-primary');
jsx = jsx.replace(/from-primary/g, 'from-hms-primary');
jsx = jsx.replace(/to-primary/g, 'to-hms-primary');
jsx = jsx.replace(/outline-primary/g, 'outline-hms-primary');

jsx = jsx.replace(/text-secondary/g, 'text-hms-secondary');
jsx = jsx.replace(/bg-secondary/g, 'bg-hms-secondary');
jsx = jsx.replace(/border-secondary/g, 'border-hms-secondary');
jsx = jsx.replace(/ring-secondary/g, 'ring-hms-secondary');
jsx = jsx.replace(/shadow-secondary/g, 'shadow-hms-secondary');
jsx = jsx.replace(/from-secondary/g, 'from-hms-secondary');
jsx = jsx.replace(/to-secondary/g, 'to-hms-secondary');
jsx = jsx.replace(/outline-secondary/g, 'outline-hms-secondary');

jsx = jsx.replace(/text-text-main/g, 'text-hms-text-main');
jsx = jsx.replace(/text-text-muted/g, 'text-hms-text-muted');
jsx = jsx.replace(/bg-background-subtle/g, 'bg-hms-bg-subtle');
jsx = jsx.replace(/bg-background-light/g, 'bg-white');

// Extract body
const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : jsx;

bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const component = `import React from 'react';

export default function HmsLandingPage() {
  return (
    <div className="bg-white text-hms-text-main antialiased overflow-x-hidden">
      ${bodyContent}
    </div>
  );
}
`;

fs.writeFileSync('src/pages/HmsLandingPage.tsx', component);
console.log('Done!');
