const fs = require('fs');

let blogCode = fs.readFileSync('src/pages/BlogHomePage.tsx', 'utf-8');

// 1. Add imports
blogCode = blogCode.replace(
    "import React from 'react';",
    "import React, { useEffect, useState } from 'react';\nimport { Link } from 'react-router-dom';\nimport { supabase } from '../lib/supabase';"
);

// 2. Add state inside BlogHomePage function
const stateCode = `  const [posts, setPosts] = useState<any[]>([]);
  const [featuredPost, setFeaturedPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('websiteblog')
          .select('*')
          .order('date', { ascending: false });

        if (error) throw error;
        
        if (data && data.length > 0) {
          // Assume the first one is the featured post
          setFeaturedPost(data[0]);
          setPosts(data.slice(1));
        }
      } catch (err) {
        console.error("Error fetching blog posts", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
`;
blogCode = blogCode.replace(
    "export default function BlogHomePage() {\n  return (",
    "export default function BlogHomePage() {\n" + stateCode + "\n  return ("
);

// 3. Replace featured post block
const featuredPostHtml = `
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md grid md:grid-cols-2">
<div className="relative h-64 md:h-auto overflow-hidden">
<div className="absolute inset-0 bg-blog-primary/10 mix-blend-multiply"></div>
<img alt="Modern workspace with natural light" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist desk with laptop and plant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9YOm2N4YcXNWxoG33T_wpV53GB9Pvn69Zn8wx1goJ-g0lAZV6ftkWl2NU0A5EnkeQQo69zmpbHjF84JWM5SzVZxJUw8ydN8PFKtu55aochkNVOG5_vo22OTiHi3_6qiaVnr05CUc9C1jrehUFO0SVKWzt256c82TWeb_FfZHxICJhly3tzuNMH9m1mwEKdIedPbnfRTU4AUKOguVSSnJUHvR5K5PuY0cJl4ejelp-I3AfaE_XyoVL74f7A9NIy67AdVUtSG6Jg7A"/>
</div>
<div className="flex flex-col justify-center p-8 md:p-12">
<div className="mb-4 flex items-center gap-3 text-xs font-medium text-blog-text-muted">
<span className="rounded-full bg-blog-primary/10 px-2 py-1 text-blog-primary">Eastern Wisdom</span>
<span>•</span>
<span>Oct 12, 2023</span>
</div>
<h2 className="mb-4 text-3xl font-bold leading-tight text-blog-text-main md:text-4xl">
                                The Tao of Data: Finding Balance in Chaos
                            </h2>
<p className="mb-8 text-blog-text-muted leading-relaxed">
                                In a world obsessed with big data, sometimes the most profound insights come from the spaces between the numbers. How ancient principles can guide modern analytics strategy.
                            </p>
<a className="inline-flex w-fit items-center gap-2 font-bold text-blog-primary hover:text-blog-primary-light hover:gap-3 transition-all" href="#">
                                Read the full story 
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
`;

const dynamicFeatured = `
{loading ? (
  <div className="text-center py-10">Đang tải bài viết...</div>
) : featuredPost ? (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md grid md:grid-cols-2">
    <div className="relative h-64 md:h-auto overflow-hidden">
      <div className="absolute inset-0 bg-blog-primary/10 mix-blend-multiply"></div>
      <img alt={featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={featuredPost.image_hero || featuredPost.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"}/>
    </div>
    <div className="flex flex-col justify-center p-8 md:p-12">
      <div className="mb-4 flex items-center gap-3 text-xs font-medium text-blog-text-muted">
        <span className="rounded-full bg-blog-primary/10 px-2 py-1 text-blog-primary">{featuredPost.category || "General"}</span>
        <span>•</span>
        <span>{featuredPost.date || "Today"}</span>
      </div>
      <h2 className="mb-4 text-3xl font-bold leading-tight text-blog-text-main md:text-4xl">
        {featuredPost.title}
      </h2>
      <p className="mb-8 text-blog-text-muted leading-relaxed line-clamp-3">
        {featuredPost.summary || featuredPost.content}
      </p>
      <Link className="inline-flex w-fit items-center gap-2 font-bold text-blog-primary hover:text-blog-primary-light hover:gap-3 transition-all" to={\`/blog/\${featuredPost.slug}\`}>
        Đọc câu chuyện đầy đủ 
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  </div>
) : (
  <div className="text-center py-10 text-blog-text-muted">Không có bài viết nổi bật.</div>
)}
`;
blogCode = blogCode.replace(featuredPostHtml.trim(), dynamicFeatured.trim());

// 4. Replace Recent Posts Grid
// We will find the grid and replace its inside
const recentGridRegex = /<div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">([\s\S]*?)<\/div>\n<\/div>\n<\/section>\n{\/\*  Newsletter  \*\/}/;
const dynamicRecentPosts = `
<div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
  {loading ? (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">Đang tải các bài viết...</div>
  ) : posts.length > 0 ? (
    posts.map((post) => (
      <article key={post.id} className="group flex flex-col gap-4">
        <Link to={\`/blog/\${post.slug}\`} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-blog-surface-light block">
          <img alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={post.image_poster || post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"}/>
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blog-primary">{post.category || "General"}</span>
          <Link to={\`/blog/\${post.slug}\`}>
            <h4 className="text-xl font-bold leading-snug text-blog-text-main group-hover:text-blog-primary transition-colors line-clamp-2">
              {post.title}
            </h4>
          </Link>
          <p className="text-sm text-blog-text-muted line-clamp-2">
            {post.summary || post.content}
          </p>
          <span className="text-xs text-blog-text-muted mt-2">{post.date || "Today"} • {(Math.max(1, Math.floor((post.content?.length || 0)/1000))) + " phút đọc"}</span>
        </div>
      </article>
    ))
  ) : (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10 text-blog-text-muted">Chưa có bài viết nào.</div>
  )}
</div>
</div>
</section>
{/*  Newsletter  */}
`;
blogCode = blogCode.replace(recentGridRegex, dynamicRecentPosts.trim());

// 5. Save the updated BlogHomePage
fs.writeFileSync('src/pages/BlogHomePage.tsx', blogCode);
console.log('BlogHomePage.tsx updated');
