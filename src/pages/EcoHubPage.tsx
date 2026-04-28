import { ArrowRight, CheckCircle2, Cpu, Mail, Monitor, Server, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const miniPcProducts = [
  {
    name: 'Haobi Mini PC N100 Starter',
    role: 'Máy khởi đầu cho OpenClaw cá nhân',
    price: '4,9–6,9 triệu',
    specs: ['Intel N100', '16GB RAM', '512GB NVMe', 'Ubuntu / Windows + WSL'],
    fit: 'Phù hợp chạy OpenClaw, n8n nhẹ, Telegram bot, Obsidian workflow và báo cáo định kỳ.',
  },
  {
    name: 'Haobi Mini PC N305 Pro',
    role: 'Cấu hình cân bằng cho automation 24/7',
    price: '7,9–9,9 triệu',
    specs: ['Intel i3-N305', '32GB RAM', '1TB NVMe', '2.5G LAN'],
    fit: 'Dành cho nhiều workflow hơn: n8n, dashboard, đồng bộ Sheets/Lark/Supabase và agent chạy nền.',
  },
  {
    name: 'Haobi Trading Box 7840HS',
    role: 'Máy trading đa màn hình',
    price: '12,9–16,9 triệu',
    specs: ['Ryzen 7 7840HS', '32GB DDR5', '1TB NVMe', '3–4 màn hình'],
    fit: 'Dành cho TradingView, app broker, Excel, nhiều tab trình duyệt và OpenClaw theo dõi/báo cáo nền.',
    featured: true,
  },
  {
    name: 'Haobi AI Ops Box 8845HS',
    role: 'Mini server cho vận hành AI nghiêm túc',
    price: '15,9–22,9 triệu',
    specs: ['Ryzen 7 8845HS', '32–64GB RAM', '1–2TB NVMe', 'Docker-ready'],
    fit: 'Dành cho nhiều agent, pipeline dữ liệu, backup nội bộ và workflow doanh nghiệp nhỏ.',
  },
];

const services = [
  {
    title: 'OpenClaw + n8n setup',
    text: 'Cài đặt máy, gateway, bot, workflow mẫu, backup cơ bản và hướng dẫn vận hành.',
    link: '/openclaw-mini-pc',
  },
  {
    title: 'Screenshot-to-Knowledge OS',
    text: 'Biến ảnh chụp màn hình thành note Obsidian có cấu trúc, có log và review queue.',
    link: '/screenshot-to-knowledge',
  },
  {
    title: 'Trading workflow desk',
    text: 'Sắp xếp môi trường giao dịch: app, màn hình, checklist, cảnh báo và báo cáo định kỳ.',
    link: 'mailto:hello@haobi.io.vn?subject=Trading%20workflow%20desk',
  },
];

export default function EcoHubPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.28em]">Haobi</Link>
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <Link to="/" className="hover:text-black">Trang chủ</Link>
            <a href="#mini-pc" className="hover:text-black">Mini PC</a>
            <a href="#services" className="hover:text-black">Dịch vụ</a>
            <Link to="/blog" className="hover:text-black">Blog</Link>
          </nav>
          <a href="mailto:hello@haobi.io.vn" className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-950 hover:text-white">Liên hệ</a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Product / Mini PC / AI automation</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Mini PC thực dụng cho OpenClaw, trading và automation.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Haobi Product Shelf tập trung vào máy nhỏ gọn, dễ triển khai, đủ ổn định để chạy 24/7. Sản phẩm phần cứng được tách rõ khỏi các gói dịch vụ cài đặt và workflow đi kèm.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#mini-pc" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                Xem sản phẩm <ArrowRight size={16} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
                Xem dịch vụ kèm theo
              </a>
            </div>
          </div>

          <aside className="border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-5">
              <span className="text-sm font-medium text-neutral-500">Product principle</span>
              <Cpu size={20} />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-4xl font-semibold">4 cấu hình</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Từ máy khởi đầu N100 đến mini server Ryzen cho nhiều agent và workflow hơn.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6">
                <Metric value="24/7" label="chạy nền" />
                <Metric value="16–64GB" label="ram" />
                <Metric value="3–4" label="màn hình" />
                <Metric value="setup" label="tuỳ chọn" />
              </div>
            </div>
          </aside>
        </section>

        <section id="mini-pc" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Hardware products</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Sản phẩm mini PC</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-600">
                Giá là khung tham khảo để thử thị trường. Khi nhập lô thật cần chốt lại theo nguồn hàng, bảo hành, hệ điều hành và mức hỗ trợ.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {miniPcProducts.map((product) => (
                <article key={product.name} className={`border bg-white p-6 ${product.featured ? 'border-neutral-950' : 'border-neutral-200'}`}>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">{product.role}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{product.name}</h3>
                    </div>
                    {product.featured ? <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">Đề xuất</span> : null}
                  </div>

                  <p className="text-3xl font-semibold tracking-tight">{product.price}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{product.fit}</p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {product.specs.map((spec) => (
                      <div key={spec} className="border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                        {spec}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Giải pháp dịch vụ đi kèm</h2>
              <p className="mt-5 text-sm leading-7 text-neutral-600">
                Phần này không còn nằm lẫn trong sản phẩm. Mini PC là hàng hoá; workflow, cài đặt và tư vấn vận hành là dịch vụ cộng thêm.
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {services.map((service) => (
                <a key={service.title} href={service.link} className="group flex items-start gap-4 py-6">
                  {service.title.includes('Screenshot') ? (
                    <Monitor size={20} className="mt-1 shrink-0 text-neutral-950" />
                  ) : service.title.includes('OpenClaw') ? (
                    <Workflow size={20} className="mt-1 shrink-0 text-neutral-950" />
                  ) : (
                    <Server size={20} className="mt-1 shrink-0 text-neutral-950" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight group-hover:underline">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{service.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <CheckCircle2 size={30} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">Vibe giữ lại</h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-neutral-800">
              {['Tối giản', 'Rõ sản phẩm', 'Không nói quá', 'Dễ triển khai'].map((item) => (
                <div key={item} className="bg-neutral-950 p-6 text-lg font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm text-neutral-500 md:flex-row md:items-center">
          <p>© Haobi — Product Shelf by Hao & Bơ.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/blog" className="hover:text-black">Blog</Link>
            <a href="mailto:hello@haobi.io.vn" aria-label="Email" className="hover:text-black"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{label}</p>
    </div>
  );
}
