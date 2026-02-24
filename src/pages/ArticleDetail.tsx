import { useEffect, useState } from 'react';
import { useMenuItems } from '../hooks/useMenuItems';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ArticleDetail() {
  const { menuItems } = useMenuItems();
  const { slug } = useParams();
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

  return (
    <div className="bg-article-bg-light text-[#111812] font-display antialiased flex flex-col min-h-screen" style={{ fontFamily: "'Noto Serif', serif" }}>
      <style>{`
        .article-wrapper .font-sans {
            font-family: 'Noto Sans', sans-serif;
        }
        .article-wrapper .font-display, .article-wrapper .font-serif {
            font-family: 'Noto Serif', serif;
        }
      `}</style>
      <div className="article-wrapper flex-grow w-full">

        {/*  Top Navbar  */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2a382e] px-10 py-4 bg-white dark:bg-[#1a2c1d]">
          <div className="flex items-center gap-4 text-[#111812] dark:text-white">
            <div className="size-6 text-article-primary">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <h2 className="text-[#111812] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Haobi's Stories</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 hidden md:flex">
            <div className="flex items-center gap-9">
              <a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Home</a>
              <a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">About</a>
              <a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Blog</a>
              <a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Contact</a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-article-primary text-[#111812] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-article-primary/90 transition-colors">
              <span className="truncate">Subscribe</span>
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </header>
        {/*  Main Content Area  */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-16">
          {/*  Breadcrumbs  */}
          <nav className="flex flex-wrap items-center gap-2 mb-8 text-sm font-sans">
            <Link className="text-sm font-medium hover:opacity-80 transition-colors" to="/">Trang chủ</Link>
            {menuItems.map(item => (
              <a
                key={item.id}
                className="text-sm font-medium hover:opacity-80 transition-colors"
                href={item.url}
                target={item.open_in_new ? "_blank" : "_self"}
                rel={item.open_in_new ? "noopener noreferrer" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/*  Article Header  */}
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111812] dark:text-white mb-6">
              {article?.title}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-gray-200 overflow-hidden relative">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTYvHs3Ijn4jMujV6JGhguKmdrK2vwDzAu56SkyCWANP925bUpj2g0B6LkYuMoq8cM5OU59u7gispMCMhXITrk37A00X-kfpbHviya653byd2UZuvVWoH4Qk8FwkJFrCjW3jV8eVAtQ0PYdbxjpoQdWihgbgQvclOE5OPpKVzWgij5m2zhkbrE5QoYzM1_fav-Ym0CQRd5Yv3HCOxvoOsbVRfdK6RTykCvOQ83Igiw1nnj6seYGIS6ZqLqmF5ZBkGPhNu3OErawc" />
                </div>
                <span className="font-bold text-[#111812] dark:text-gray-200">Bởi Haobi</span>
              </div>
              <span>•</span>
              <time>{article?.date || "Hôm nay"}</time>
              <span>•</span>
              <span>{Math.max(1, Math.floor((article?.content?.length || 0) / 1000))} phút đọc</span>
            </div>
          </header>
          {/*  Featured Image  */}
          {(article?.image || article?.image_hero || article?.image_content) && (
            <figure className="mb-12 rounded-xl overflow-hidden shadow-sm">
              <img alt={article?.title} className="w-full h-auto max-h-[60vh] object-cover" src={article?.image || article?.image_hero || article?.image_content} />
            </figure>
          )}
          {/*  Content Body  */}
          <article className="prose prose-lg prose-headings:font-display prose-p:font-display prose-li:font-display max-w-none text-[#111812]/90 dark:text-gray-300">
            {article?.content?.split('\n').map((paragraph: string, i: number) => {
              if (paragraph.trim() === '') return <br key={i} />;
              if (paragraph.startsWith('✨') || paragraph.startsWith('❗')) {
                return <p key={i} className="text-xl leading-relaxed mb-6 font-serif font-bold text-article-primary">{paragraph}</p>;
              }
              return <p key={i} className="mb-6 leading-relaxed font-serif text-lg">{paragraph}</p>;
            })}
          </article>
          {/*  Divider  */}
          <hr className="my-16 border-gray-200 dark:border-gray-800" />
          {/*  Author Bio  */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white dark:bg-[#1a2c1d] p-8 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="size-24 md:size-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-article-primary/20">
              <img className="w-full h-full object-cover" data-alt="Close up of Haobi smiling in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGpuyHQtrHlV8XP3yWsJgHYtBGNGo8OisganE7F1BOEyTrEHU4ZcnvPxfRkhcxYdiR3dcSURRd0Tt9PyafkJtEjMbOoibCjxkvpmUbIRwxC4cRkysJ7gl6zU3XUKKievIdv7fEER8IQheNsrrVKQ0GBfNtXTs18acDWnkR8eM1f8_RH3512tgvinHkqzQynZ3ZT0DScMlbTFxGYY7V_SHjOhx-i0pOQyMVLvMEAC_My7mlC892RVtMT9qhgb1wy5eJ3z_Is_ohqs" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="text-xl font-bold text-[#111812] dark:text-white">About Haobi</h3>
                <a aria-label="LinkedIn Profile" className="text-gray-400 hover:text-[#0077b5] transition-colors" href="#">
                  {/*  LinkedIn styled icon via Material Symbols approximation or SVG placeholder since font icons requested  */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-sans mb-4 max-w-lg">
                Data storyteller, Bazi enthusiast, and father. Bridging the gap between cold hard numbers and the warm rhythms of life.
              </p>
              <button className="text-sm font-bold text-article-primary hover:text-article-primary/80 transition-colors uppercase tracking-wider">
                View full profile
              </button>
            </div>
          </div>
          {/*  Related Posts  */}
          <section className="mt-20">
            <div className="flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-article-primary">auto_awesome</span>
              <h3 className="text-lg font-bold font-sans uppercase tracking-widest text-gray-500">You might also like</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map(rel => (
                <Link key={rel.id} className="group block" to={`/blog/${rel.slug}`}>
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
        {/*  Footer  */}
        <footer className="mt-auto border-t border-gray-100 dark:border-gray-800 py-12 bg-white dark:bg-[#1a2c1d]">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 font-sans">© 2023 Haobi's Stories. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-gray-400 hover:text-article-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
              <a className="text-gray-400 hover:text-article-primary transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
