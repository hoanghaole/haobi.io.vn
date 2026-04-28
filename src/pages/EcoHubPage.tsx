import { Link } from 'react-router-dom';

const hardwareProducts = [
  {
    id: 'n100-starter',
    category: 'Mini PC',
    tag: 'Starter',
    title: 'Haobi Mini PC N100 Starter',
    price: 'Dự kiến 4,9–6,9 triệu',
    description:
      'Máy nhỏ gọn cho OpenClaw cá nhân, n8n nhẹ, Telegram/Zalo automation và dashboard đơn giản chạy 24/7.',
    specs: ['Intel N100', '16GB RAM', '512GB NVMe', '2 màn hình'],
    cta: 'Xem gói OpenClaw',
    link: '/openclaw-mini-pc',
    icon: 'memory',
  },
  {
    id: 'n305-pro',
    category: 'Mini PC',
    tag: 'Balanced',
    title: 'Haobi Mini PC N305 Pro',
    price: 'Dự kiến 7,9–9,9 triệu',
    description:
      'Cấu hình cân bằng cho người cần nhiều tab, nhiều workflow, OpenClaw + n8n + báo cáo định kỳ ổn định hơn.',
    specs: ['Intel i3-N305', '32GB RAM', '1TB NVMe', '3 màn hình'],
    cta: 'Tư vấn cấu hình',
    link: 'mailto:hello@haobi.io.vn?subject=Tu%20van%20Haobi%20Mini%20PC%20N305',
    icon: 'developer_board',
  },
  {
    id: '7840hs-trading',
    category: 'Trading Station',
    tag: 'Khuyến nghị',
    title: 'Haobi Trading Box 7840HS',
    price: 'Dự kiến 12,9–16,9 triệu',
    description:
      'Mini PC mạnh cho trading đa màn, TradingView, app broker, Excel, trình duyệt nhiều tab và OpenClaw chạy nền.',
    specs: ['Ryzen 7 7840HS', '32GB DDR5', '1TB NVMe', '3–4 màn hình'],
    cta: 'Xem cấu hình đề xuất',
    link: '/openclaw-mini-pc',
    icon: 'monitoring',
    highlighted: true,
  },
  {
    id: '8845hs-ai-server',
    category: 'AI Server',
    tag: 'Premium',
    title: 'Haobi AI Ops Box 8845HS',
    price: 'Dự kiến 15,9–22,9 triệu',
    description:
      'Máy mini server cho nhiều agent, Docker nhẹ, workflow dữ liệu, backup nội bộ và vận hành AI automation nghiêm túc.',
    specs: ['Ryzen 7 8845HS', '32–64GB RAM', '1–2TB NVMe', '2.5G LAN'],
    cta: 'Đặt lịch pilot',
    link: 'mailto:hello@haobi.io.vn?subject=Pilot%20Haobi%20AI%20Ops%20Box',
    icon: 'hub',
  },
];

const serviceSolutions = [
  {
    title: 'Screenshot-to-Knowledge OS',
    text: 'Biến ảnh chụp màn hình thành note Obsidian có cấu trúc, có review queue và có thể tìm lại bằng hội thoại.',
    link: '/screenshot-to-knowledge',
    label: 'Office notes automation',
  },
  {
    title: 'OpenClaw + n8n Setup',
    text: 'Cài OpenClaw, n8n, Telegram bot, lịch báo cáo và workflow mẫu trên mini PC hoặc VPS riêng.',
    link: '/openclaw-mini-pc',
    label: 'AI automation service',
  },
  {
    title: 'Trading Workflow Desk',
    text: 'Bố trí máy, màn hình, browser profile, app trading, cảnh báo tin tức và checklist vận hành cho trader cá nhân.',
    link: 'mailto:hello@haobi.io.vn?subject=Trading%20Workflow%20Desk',
    label: 'Trading ops service',
  },
];

export default function EcoHubPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
              <span className="material-symbols-outlined text-xl">storefront</span>
            </div>
            <div>
              <p className="text-sm font-black leading-none">Haobi Product Shelf</p>
              <p className="text-xs text-slate-400">Mini PC · AI automation · Trading desk</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#hardware">Sản phẩm</a>
            <a className="hover:text-white" href="#solutions">Giải pháp</a>
            <Link className="hover:text-white" to="/">Trang chủ</Link>
          </nav>
          <a href="mailto:hello@haobi.io.vn?subject=Tu%20van%20san%20pham%20Haobi" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200">
            Hỏi cấu hình
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-300">Product first</p>
          <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Mini PC cài sẵn cho OpenClaw, trading và automation cá nhân.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Trang này tách rõ <b>sản phẩm phần cứng</b> và <b>giải pháp dịch vụ</b>: khách có thể mua máy trước,
            rồi chọn thêm setup OpenClaw, n8n, screenshot workflow hoặc trading desk khi cần.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#hardware" className="rounded-2xl bg-emerald-300 px-7 py-4 font-black text-slate-950 transition hover:bg-emerald-200">
              Xem mini PC
            </a>
            <a href="#solutions" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
              Xem dịch vụ kèm theo
            </a>
          </div>
        </section>

        <section id="hardware" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Sản phẩm phần cứng</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Mini PC chọn lọc để bán thử</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Giá là khung dự kiến sau nhập hàng, kiểm tra, cài hệ điều hành cơ bản và bảo hành/pilot nội bộ. Chốt giá theo lô hàng thực tế.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hardwareProducts.map((product) => (
              <article
                key={product.id}
                className={`group flex h-full flex-col rounded-[2rem] border p-6 transition ${
                  product.highlighted
                    ? 'border-emerald-300/50 bg-emerald-300/[0.08] shadow-2xl shadow-emerald-500/10'
                    : 'border-white/10 bg-white/[0.045] hover:border-white/25'
                }`}
              >
                <div className="mb-6 flex h-40 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
                  <div className="relative flex h-24 w-36 items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-slate-700 to-slate-950 shadow-2xl">
                    <div className="absolute -top-3 h-3 w-24 rounded-t-xl bg-slate-700" />
                    <span className="material-symbols-outlined text-4xl text-emerald-300">{product.icon}</span>
                    <div className="absolute bottom-4 right-5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-300">{product.category}</span>
                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-300">{product.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black leading-tight">{product.title}</h3>
                <p className="mt-3 text-xl font-black text-emerald-200">{product.price}</p>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{product.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {product.specs.map((spec) => (
                    <div key={spec} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200">
                      {spec}
                    </div>
                  ))}
                </div>
                <a href={product.link} className="mt-6 inline-flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition group-hover:bg-emerald-200">
                  {product.cta}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl lg:p-10">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Giải pháp / dịch vụ</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Không trộn với sản phẩm — đây là phần setup thêm.</h2>
              <p className="mt-4 text-slate-300">
                Các workflow như screenshot-to-knowledge, OpenClaw/n8n setup hoặc trading desk được đặt thành dịch vụ đi kèm,
                giúp khách hiểu: mua máy là một chuyện, triển khai để chạy được việc là một giá trị riêng.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {serviceSolutions.map((solution) => (
                <article key={solution.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{solution.label}</p>
                  <h3 className="mt-3 text-xl font-black">{solution.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-slate-300">{solution.text}</p>
                  <a href={solution.link} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emerald-300 hover:text-emerald-200">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
