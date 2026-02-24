import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function BlogHomePage() {
  const [posts, setPosts] = useState<any[]>([]);
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

  return (
    <div className="bg-blog-bg-light text-blog-text-main flex min-h-screen flex-col overflow-x-hidden antialiased selection:bg-blog-primary/20 selection:text-blog-primary" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      
      {/* Wrapper to handle font families for headings if possible, or just rely on CSS */}
      <style>{`
        .blog-wrapper h1, .blog-wrapper h2, .blog-wrapper h3, .blog-wrapper h4, .blog-wrapper h5, .blog-wrapper h6 {
            font-family: 'Noto Serif', serif;
        }
        .blog-wrapper .font-display {
            font-family: 'Noto Serif', serif;
        }
      `}</style>
      <div className="blog-wrapper w-full flex-grow">
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="sticky top-0 z-50 flex items-center justify-between border-b border-blog-surface-light bg-blog-bg-light/95 backdrop-blur-md px-6 py-4 lg:px-20">
<div className="flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-full bg-blog-primary/10 text-blog-primary">
<span className="material-symbols-outlined text-2xl">auto_stories</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-blog-text-main">Haobi's Journal</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-blog-primary transition-colors" href="#">Home</a>
<a className="text-sm font-medium hover:text-blog-primary transition-colors" href="#">About</a>
<a className="text-sm font-medium hover:text-blog-primary transition-colors" href="#">Philosophy</a>
<a className="text-sm font-medium hover:text-blog-primary transition-colors" href="#">Data</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex rounded-full bg-blog-primary px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-blog-primary/90 transition-colors">
                    Subscribe
                </button>
<button className="md:hidden p-2 text-blog-text-main">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<section className="relative px-6 py-12 lg:px-20 lg:py-20">
<div className="mx-auto max-w-4xl text-center">
<h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-blog-text-main md:text-5xl lg:text-6xl">
                        Where Data Meets Destiny
                    </h1>
<p className="mx-auto mb-10 max-w-2xl text-lg text-blog-text-muted md:text-xl font-light">
                        Exploring the intersections of numbers, ancient wisdom, and everyday life through the lens of a data storyteller.
                    </p>
{/*  Search Bar  */}
<div className="mx-auto max-w-lg">
<div className="relative flex items-center">
<input className="w-full rounded-2xl border border-blog-surface-light bg-white py-4 pl-12 pr-4 shadow-sm focus:border-blog-primary focus:outline-none focus:ring-1 focus:ring-blog-primary placeholder:text-blog-text-muted/60" placeholder="Search for stories, wisdom, or data..." type="text"/>
<span className="material-symbols-outlined absolute left-4 text-blog-text-muted">search</span>
<button className="absolute right-2 rounded-xl bg-blog-primary px-4 py-2 text-sm font-bold text-white hover:bg-blog-primary/90 transition-colors">
                                Search
                            </button>
</div>
</div>
</div>
{/*  Decorative elements  */}
<div className="absolute top-10 left-10 -z-10 opacity-10">
<span className="material-symbols-outlined text-9xl text-blog-primary">spa</span>
</div>
<div className="absolute bottom-10 right-10 -z-10 opacity-10">
<span className="material-symbols-outlined text-9xl text-blog-secondary">analytics</span>
</div>
</section>
{/*  Categories  */}
<section className="border-y border-blog-surface-light bg-white px-6 py-8 lg:px-20">
<div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
<a className="group flex items-center gap-2 rounded-full border border-blog-surface-light bg-blog-bg-light px-5 py-2 hover:border-blog-primary/30 hover:bg-blog-primary/5 transition-all" href="#">
<span className="material-symbols-outlined text-blog-primary text-xl group-hover:scale-110 transition-transform">bar_chart</span>
<span className="text-sm font-medium text-blog-text-main">Data &amp; Strategy</span>
</a>
<a className="group flex items-center gap-2 rounded-full border border-blog-surface-light bg-blog-bg-light px-5 py-2 hover:border-blog-primary/30 hover:bg-blog-primary/5 transition-all" href="#">
<span className="material-symbols-outlined text-blog-primary text-xl group-hover:scale-110 transition-transform">balance</span>
<span className="text-sm font-medium text-blog-text-main">Eastern Wisdom</span>
</a>
<a className="group flex items-center gap-2 rounded-full border border-blog-surface-light bg-blog-bg-light px-5 py-2 hover:border-blog-primary/30 hover:bg-blog-primary/5 transition-all" href="#">
<span className="material-symbols-outlined text-blog-primary text-xl group-hover:scale-110 transition-transform">self_improvement</span>
<span className="text-sm font-medium text-blog-text-main">Life &amp; Reflections</span>
</a>
<a className="group flex items-center gap-2 rounded-full border border-blog-surface-light bg-blog-bg-light px-5 py-2 hover:border-blog-primary/30 hover:bg-blog-primary/5 transition-all" href="#">
<span className="material-symbols-outlined text-blog-primary text-xl group-hover:scale-110 transition-transform">terminal</span>
<span className="text-sm font-medium text-blog-text-main">Tech Tutorials</span>
</a>
</div>
</section>
{/*  Featured Story  */}
<section className="px-6 py-16 lg:px-20 bg-blog-surface-light/30">
<div className="mx-auto max-w-6xl">
<div className="mb-8 flex items-center gap-2 text-blog-primary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-xs font-bold uppercase tracking-wider">Featured Story</span>
</div>
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
      <Link className="inline-flex w-fit items-center gap-2 font-bold text-blog-primary hover:text-blog-primary-light hover:gap-3 transition-all" to={`/blog/${featuredPost.slug}`}>
        Đọc câu chuyện đầy đủ 
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  </div>
) : (
  <div className="text-center py-10 text-blog-text-muted">Không có bài viết nổi bật.</div>
)}
</div>
</section>
{/*  Recent Posts Grid  */}
<section className="px-6 py-16 lg:px-20">
<div className="mx-auto max-w-6xl">
<div className="mb-10 flex items-end justify-between border-b border-blog-surface-light pb-4">
<h3 className="text-2xl font-bold text-blog-text-main">Recent Writings</h3>
<a className="text-sm font-medium text-blog-primary hover:underline" href="#">View Archive</a>
</div>
<div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
  {loading ? (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">Đang tải các bài viết...</div>
  ) : posts.length > 0 ? (
    posts.map((post) => (
      <article key={post.id} className="group flex flex-col gap-4">
        <Link to={`/blog/${post.slug}`} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-blog-surface-light block">
          <img alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={post.image_poster || post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"}/>
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blog-primary">{post.category || "General"}</span>
          <Link to={`/blog/${post.slug}`}>
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
<section className="mt-8 bg-blog-surface-light/50 px-6 py-20 lg:px-20">
<div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
<div className="rounded-full bg-white p-4 shadow-sm">
<span className="material-symbols-outlined text-4xl text-blog-primary">mail</span>
</div>
<h2 className="text-3xl font-bold text-blog-text-main md:text-4xl">Join the Inner Circle</h2>
<p className="max-w-md text-blog-text-muted">
                        Get new stories about data, life, and philosophy delivered directly to your inbox. No spam, just reflections.
                    </p>
<form className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row">
<input className="flex-1 rounded-xl border border-gray-200 px-4 py-3 focus:border-blog-primary focus:outline-none focus:ring-1 focus:ring-blog-primary" placeholder="your@email.com" required="" type="email"/>
<button className="rounded-xl bg-blog-primary px-6 py-3 font-bold text-white shadow-md hover:bg-blog-primary/90 transition-transform active:scale-95" type="button">
                            Subscribe
                        </button>
</form>
<p className="text-xs text-blog-text-muted">
                        By subscribing, you agree to our Terms &amp; Privacy Policy.
                    </p>
</div>
</section>
</main>
<footer className="bg-blog-bg-dark py-12 text-white">
<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:px-20">
<div className="flex flex-col justify-between gap-8 md:flex-row">
<div className="max-w-sm">
<h3 className="mb-4 font-display text-2xl font-bold">Haobi's Journal</h3>
<p className="text-gray-400">
                            Exploring the delicate balance between the analytical mind and the spiritual heart.
                        </p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3">
<h4 className="font-bold text-gray-200">Explore</h4>
<a className="text-gray-400 hover:text-blog-primary" href="#">Articles</a>
<a className="text-gray-400 hover:text-blog-primary" href="#">Philosophy</a>
<a className="text-gray-400 hover:text-blog-primary" href="#">Data Viz</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-gray-200">Connect</h4>
<a className="text-gray-400 hover:text-blog-primary" href="#">Twitter</a>
<a className="text-gray-400 hover:text-blog-primary" href="#">LinkedIn</a>
<a className="text-gray-400 hover:text-blog-primary" href="#">RSS</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
<p className="text-sm text-gray-500">© 2023 Haobi's Journal. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-sm text-gray-500 hover:text-white" href="#">Privacy</a>
<a className="text-sm text-gray-500 hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>

      </div>
    </div>
  );
}
