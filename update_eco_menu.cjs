const fs = require('fs');

function updateMenu(filePath, linkClassNameTarget) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Insert import
    if (!content.includes('useMenuItems')) {
        content = content.replace(
            "import React",
            "import React from 'react';\nimport { useMenuItems } from '../hooks/useMenuItems';\nimport { Link } from 'react-router-dom';\nimport"
        );
        // clean up duplicate imports if any
        content = content.replace("import React from 'react';\nimport React", "import React");
    }

    // Insert hook call
    if (!content.includes('const { menuItems } = useMenuItems();')) {
        content = content.replace(/(export default function \w+\(\) {\n)/, "$1  const { menuItems } = useMenuItems();\n");
    }

    // Replace Header Nav logic
    // Looking for <nav className="hidden md:flex ...">...</nav>
    // We need to keep the nav's styling but replace its content
    const navMatch = content.match(/(<nav className="[^"]*">)([\s\S]*?)(<\/nav>)/);
    if (navMatch) {
        const navTagBegin = navMatch[1];

        // Default class based on the file or we can just extract from the first <a> inside the original
        let linkClass = "";
        const aMatch = navMatch[0].match(/<a className="([^"]+)"/);
        if (aMatch) {
            linkClass = aMatch[1].replace('transition-colors', 'transition-colors').replace('hover:underline', '');
        } else {
            linkClass = "text-sm font-medium hover:opacity-80 transition-colors";
        }

        const newNavContent = `
      <Link className="${linkClass}" to="/">Trang chủ</Link>
      {menuItems.map(item => (
        <a 
          key={item.id}
          className="${linkClass}"
          href={item.url}
          target={item.open_in_new ? "_blank" : "_self"}
          rel={item.open_in_new ? "noopener noreferrer" : ""}
        >
          {item.label}
        </a>
      ))}
    `;

        content = content.replace(navMatch[0], `${navTagBegin}${newNavContent}</nav>`);
    }

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
}

['src/pages/EcoHubPage.tsx'].forEach(p => updateMenu(p));
