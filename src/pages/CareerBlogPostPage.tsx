import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPost } from '../data/blogPosts';

export default function CareerBlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5 text-neutral-950">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">Chưa có bài viết này</h1>
          <Link to="/blog" className="mt-8 inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white">Quay lại blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black"><ArrowLeft size={16} /> Blog</Link>
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.28em]">Haobi</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <article>
          <div className="mb-10 border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">{post.category}</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">{post.description}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-500">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 className="mt-12 text-3xl font-semibold tracking-tight">{children}</h2>,
              h3: ({ children }) => <h3 className="mt-9 text-2xl font-semibold tracking-tight">{children}</h3>,
              p: ({ children }) => <p className="mt-5 leading-8 text-neutral-700">{children}</p>,
              ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-neutral-700">{children}</ul>,
              ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 leading-8 text-neutral-700">{children}</ol>,
              blockquote: ({ children }) => <blockquote className="mt-8 border-l-2 border-neutral-950 pl-5 text-lg text-neutral-700">{children}</blockquote>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
