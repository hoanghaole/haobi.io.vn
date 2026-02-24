const fs = require('fs');

let articleCode = fs.readFileSync('src/pages/ArticleDetail.tsx', 'utf-8');

// 1. Add imports
articleCode = articleCode.replace(
    "import React from 'react';",
    "import React, { useEffect, useState } from 'react';\nimport { useParams, Link, useNavigate } from 'react-router-dom';\nimport { supabase } from '../lib/supabase';"
);

// 2. Add state inside ArticleDetail
const stateCode = `  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;
      try {
        const { data, error } = await supabase
          .from('websiteblog')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        
        if (data) {
          setArticle(data);
          
          // Fetch related articles
          const { data: relatedData } = await supabase
            .from('websiteblog')
            .select('*')
            .neq('id', data.id)
            .limit(3);
            
          if (relatedData) setRelated(relatedData);
        } else {
          navigate('/blog');
        }
      } catch (err) {
        console.error("Error fetching article", err);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="bg-article-bg-light min-h-screen flex items-center justify-center font-display text-2xl">
        Đang tải nội dung...
      </div>
    );
  }

  if (!article) return null;
`;

articleCode = articleCode.replace(
    "export default function ArticleDetail() {\n  return (",
    "export default function ArticleDetail() {\n" + stateCode + "\n  return ("
);

// 3. Replace Breadcrumbs inner text
articleCode = articleCode.replace(
    /<nav className="flex flex-wrap items-center gap-2 mb-8 text-sm font-sans">[\s\S]*?<\/nav>/,
    `<nav className="flex flex-wrap items-center gap-2 mb-8 text-sm font-sans">
    <Link className="text-gray-500 hover:text-article-primary transition-colors" to="/">Trang chủ</Link>
    <span className="text-gray-400">/</span>
    <Link className="text-gray-500 hover:text-article-primary transition-colors" to="/blog">Blog</Link>
    <span className="text-gray-400">/</span>
    <span className="text-gray-800 dark:text-gray-200 font-medium">{article?.category || "Tản mạn"}</span>
</nav>`
);

// 4. Replace Article Header
articleCode = articleCode.replace(
    /<header className="mb-10 text-center md:text-left">[\s\S]*?<\/header>/,
    `<header className="mb-10 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111812] dark:text-white mb-6">
      {article?.title}
    </h1>
    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gray-200 overflow-hidden relative">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTYvHs3Ijn4jMujV6JGhguKmdrK2vwDzAu56SkyCWANP925bUpj2g0B6LkYuMoq8cM5OU59u7gispMCMhXITrk37A00X-kfpbHviya653byd2UZuvVWoH4Qk8FwkJFrCjW3jV8eVAtQ0PYdbxjpoQdWihgbgQvclOE5OPpKVzWgij5m2zhkbrE5QoYzM1_fav-Ym0CQRd5Yv3HCOxvoOsbVRfdK6RTykCvOQ83Igiw1nnj6seYGIS6ZqLqmF5ZBkGPhNu3OErawc"/>
        </div>
        <span className="font-bold text-[#111812] dark:text-gray-200">Bởi Haobi</span>
      </div>
      <span>•</span>
      <time>{article?.date || "Hôm nay"}</time>
      <span>•</span>
      <span>{Math.max(1, Math.floor((article?.content?.length || 0)/1000))} phút đọc</span>
    </div>
</header>`
);

// 5. Replace Featured Image
articleCode = articleCode.replace(
    /<figure className="mb-12 rounded-xl overflow-hidden shadow-sm">[\s\S]*?<\/figure>/,
    `{(article?.image || article?.image_hero || article?.image_content) && (
    <figure className="mb-12 rounded-xl overflow-hidden shadow-sm">
      <img alt={article?.title} className="w-full h-auto max-h-[60vh] object-cover" src={article?.image || article?.image_hero || article?.image_content} />
    </figure>
  )}`
);

// 6. Replace Content Body (Replacing the whole <article> block)
articleCode = articleCode.replace(
    /<article className="prose prose-lg prose-headings:font-display prose-p:font-display prose-li:font-display max-w-none text-\[#111812\]\/90 dark:text-gray-300">[\s\S]*?<\/article>/,
    `<article className="prose prose-lg prose-headings:font-display prose-p:font-display prose-li:font-display max-w-none text-[#111812]/90 dark:text-gray-300">
    {article?.content?.split('\\n').map((paragraph: string, i: number) => {
      if (paragraph.trim() === '') return <br key={i} />;
      if (paragraph.startsWith('✨') || paragraph.startsWith('❗')) {
        return <p key={i} className="text-xl leading-relaxed mb-6 font-serif font-bold text-article-primary">{paragraph}</p>;
      }
      return <p key={i} className="mb-6 leading-relaxed font-serif text-lg">{paragraph}</p>;
    })}
</article>`
);

// 7. Update Related Posts Grid content
const relatedGridRegex = /<div className="grid md:grid-cols-3 gap-8">([\s\S]*?)<\/div>\n<\/section>\n<\/main>\n{\/\*  Footer  \*\/}/;
const dynamicRelated = `<div className="grid md:grid-cols-3 gap-8">
  {related.map(rel => (
    <Link key={rel.id} className="group block" to={\`/blog/\${rel.slug}\`}>
      <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('" + (rel.image_poster || rel.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71") + "')" }}></div>
      </div>
      <h4 className="text-xl font-bold mb-2 group-hover:text-article-primary transition-colors text-[#111812] dark:text-white">{rel.title}</h4>
      <p className="text-sm text-gray-500 font-sans line-clamp-2">{rel.summary || rel.content}</p>
    </Link>
  ))}
</div>
</section>
</main>
{/*  Footer  */}`;
articleCode = articleCode.replace(relatedGridRegex, dynamicRelated);

fs.writeFileSync('src/pages/ArticleDetail.tsx', articleCode);
console.log('ArticleDetail.tsx updated!');
