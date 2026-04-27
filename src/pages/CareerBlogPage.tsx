import { ArrowRight, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function CareerBlogPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.28em]">Haobi</Link>
          <nav className="flex items-center gap-5 text-sm text-neutral-600">
            <Link to="/story" className="hover:text-black">Câu chuyện</Link>
            <Link to="/lab" className="hover:text-black">Lab</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <section className="grid gap-10 border-b border-neutral-200 pb-14 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Haobi Blog</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">Nơi Ba viết về sự nghiệp, dữ liệu và AI.</h1>
          </div>
          <div className="border border-neutral-200 bg-neutral-50 p-6">
            <PenLine size={24} />
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Mỗi bài nên là một mảnh tri thức có thể được người đọc và AI hiểu rõ: trả lời thẳng, có ví dụ thật, có bài học vận hành.
            </p>
          </div>
        </section>

        <section className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
          {blogPosts.map((post) => (
            <article key={post.slug} className="grid gap-6 py-8 md:grid-cols-[180px_1fr_auto] md:items-start">
              <div className="space-y-2 text-sm text-neutral-500">
                <p>{formatDate(post.date)}</p>
                <p>{post.readingTime}</p>
                <p className="font-medium text-neutral-800">{post.category}</p>
              </div>
              <div>
                <Link to={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:underline md:text-3xl">{post.title}</h2>
                </Link>
                <p className="mt-4 max-w-2xl leading-7 text-neutral-600">{post.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">{tag}</span>
                  ))}
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:gap-3">
                Đọc <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
}
