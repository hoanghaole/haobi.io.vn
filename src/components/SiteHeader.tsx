import { Link } from 'react-router-dom';

type SiteHeaderProps = {
  variant?: 'light' | 'dark';
  maxWidthClass?: string;
  sectionLinks?: Array<{ href: string; label: string }>;
};

const mainLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/products', label: 'Product' },
  { to: '/lab', label: 'Lab' },
  { to: '/story', label: 'Câu chuyện' },
  { to: '/blog', label: 'Blog' },
];

export default function SiteHeader({ variant = 'light', maxWidthClass = 'max-w-6xl', sectionLinks = [] }: SiteHeaderProps) {
  const isDark = variant === 'dark';
  const shellClass = isDark
    ? 'sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 text-white backdrop-blur-xl'
    : 'sticky top-0 z-50 border-b border-neutral-200 bg-white/90 text-neutral-950 backdrop-blur';
  const navClass = isDark ? 'text-slate-300 hover:text-white' : 'text-neutral-600 hover:text-black';
  const ctaClass = isDark
    ? 'rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200'
    : 'rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium transition hover:bg-neutral-950 hover:text-white';

  return (
    <header className={shellClass}>
      <div className={`mx-auto flex h-16 ${maxWidthClass} items-center justify-between px-5`}>
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.28em]">Haobi</Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {mainLinks.map((link) => (
            <Link key={link.to} to={link.to} className={navClass}>{link.label}</Link>
          ))}
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} className={navClass}>{link.label}</a>
          ))}
        </nav>
        <a href="mailto:hello@haobi.io.vn" className={ctaClass}>Liên hệ</a>
      </div>
    </header>
  );
}
