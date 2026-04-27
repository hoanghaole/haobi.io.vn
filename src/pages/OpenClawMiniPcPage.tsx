import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Check,
  Cpu,
  Database,
  Gauge,
  HardDrive,
  Home,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const pcOptions = [
  {
    name: 'BơBox Starter',
    badge: 'Cho cá nhân / thử nghiệm',
    price: 'Từ 6-8 triệu',
    tagline: 'Mini server nhỏ gọn để chạy OpenClaw, n8n và dashboard cơ bản 24/7.',
    cpu: 'Intel N100 / N305',
    ram: '16GB RAM',
    storage: '512GB SSD',
    bestFor: ['Trợ lý AI cá nhân', 'Workflow n8n nhẹ', 'Telegram/Zalo automation', 'Obsidian + báo cáo định kỳ'],
    included: ['Cài OpenClaw + n8n', 'Thiết lập truy cập nội bộ', '1-2 workflow mẫu', 'Hướng dẫn vận hành 7 ngày'],
    tone: 'from-emerald-400 to-cyan-400',
  },
  {
    name: 'Agent Box Pro',
    badge: 'Khuyến nghị cho SME',
    price: 'Từ 10-15 triệu',
    tagline: 'Cấu hình cân bằng cho chủ shop/doanh nghiệp nhỏ cần automation ổn định hơn.',
    cpu: 'Intel i5 Gen 8+ / Ryzen 5',
    ram: '32GB RAM',
    storage: '1TB SSD',
    bestFor: ['Đội AI nội bộ nhiều agent', 'n8n nhiều workflow', 'Dashboard/Power BI data sync', 'Lark Base / Google Sheet automation'],
    included: ['Cài OpenClaw + n8n + monitoring', 'Backup cấu hình cơ bản', '3-5 workflow mẫu', 'Hỗ trợ pilot 14 ngày'],
    tone: 'from-blue-400 to-violet-400',
    highlighted: true,
  },
  {
    name: 'OpenClaw Ops Server',
    badge: 'Cho vận hành nghiêm túc',
    price: 'Theo cấu hình',
    tagline: 'Máy mạnh hơn cho team nhỏ, nhiều workflow, dữ liệu lớn hơn và nhu cầu uptime tốt hơn.',
    cpu: 'Intel i7 / Ryzen 7 / mini workstation',
    ram: '64GB RAM+',
    storage: '2TB SSD + backup',
    bestFor: ['Nhiều agent chạy song song', 'Pipeline dữ liệu định kỳ', 'CRM/booking/KOC workflow', 'Báo cáo vận hành nhiều phòng ban'],
    included: ['Thiết kế kiến trúc theo nhu cầu', 'Hardening + backup plan', 'Workflow riêng theo use case', 'Gói hỗ trợ theo tháng'],
    tone: 'from-orange-300 to-rose-400',
  },
];

const useCases = [
  {
    icon: Bot,
    title: 'Đội AI riêng của Ba',
    text: 'Chạy OpenClaw 24/7 để nghe ngóng, tóm tắt, tạo báo cáo và hỗ trợ điều hành hằng ngày.',
  },
  {
    icon: Workflow,
    title: 'Automation thực chiến',
    text: 'Kết nối n8n với Telegram, Gmail, Sheets, Lark Base, Supabase hoặc các webhook nội bộ.',
  },
  {
    icon: Database,
    title: 'Data & dashboard',
    text: 'Đồng bộ dữ liệu bán hàng, booking, affiliate/KOC hoặc vận hành để dựng báo cáo định kỳ.',
  },
  {
    icon: ShieldCheck,
    title: 'Dữ liệu nằm trong tay mình',
    text: 'Phù hợp khi muốn giảm phụ thuộc cloud, vẫn giữ máy chạy tại nhà/văn phòng và kiểm soát truy cập.',
  },
];

const steps = [
  'Khảo sát nhu cầu: Ba đang muốn tự động hoá việc gì, dữ liệu nằm ở đâu, ai là người dùng?',
  'Chọn cấu hình mini PC phù hợp: Starter, Pro hoặc Ops Server.',
  'Cài đặt OpenClaw, n8n, truy cập từ xa an toàn và workflow mẫu.',
  'Chạy pilot 7-14 ngày, đo hiệu quả, rồi mới mở rộng thêm agent/workflow.',
];

export default function OpenClawMiniPcPage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-16rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20">
              <Cpu size={20} />
            </div>
            <div>
              <p className="text-sm font-bold leading-none">BơBox</p>
              <p className="text-xs text-slate-400">OpenClaw Mini Server</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-emerald-300" href="#options">Cấu hình</a>
            <a className="hover:text-emerald-300" href="#use-cases">Use case</a>
            <a className="hover:text-emerald-300" href="#process">Quy trình</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200">
            Tư vấn cấu hình
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Sparkles size={16} />
              Mini PC đóng gói sẵn cho OpenClaw, n8n và AI automation
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Biến mini PC thành{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                đội AI vận hành 24/7
              </span>{' '}
              cho doanh nghiệp nhỏ.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              BơBox không chỉ là bán phần cứng. Đây là gói mini server đã được cài OpenClaw, n8n,
              dashboard và workflow mẫu để chủ doanh nghiệp bắt đầu tự động hoá thật nhanh.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#options" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-300">
                Xem các option <ArrowRight size={20} />
              </a>
              <a href="#use-cases" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10">
                BơBox làm được gì?
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center">
              {['OpenClaw', 'n8n', 'Dashboard'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Live Stack</p>
                    <h2 className="mt-2 text-2xl font-black">BơBox Control Panel</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                    <Zap size={24} />
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    ['OpenClaw Gateway', 'running', '99.9% local uptime'],
                    ['n8n Workflows', 'active', '12 automations ready'],
                    ['Telegram Reports', 'scheduled', 'hourly listening radar'],
                    ['Supabase / Lark Sync', 'connected', 'data pipeline prepared'],
                  ].map(([name, state, detail]) => (
                    <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-white">{name}</p>
                          <p className="mt-1 text-sm text-slate-400">{detail}</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase text-emerald-300">
                          {state}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Metric icon={Gauge} label="Workflow" value="24/7" />
                  <Metric icon={Network} label="Access" value="Local" />
                  <Metric icon={HardDrive} label="Backup" value="Ready" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="options" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Cấu hình đề xuất</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Chọn BơBox theo mức độ vận hành</h2>
            <p className="mt-4 text-slate-300">Giá là khung tham khảo cho pilot. Cấu hình và phí setup sẽ chốt theo nguồn máy, nhu cầu workflow và mức hỗ trợ.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pcOptions.map((option) => (
              <article
                key={option.name}
                className={`relative rounded-[2rem] border p-6 backdrop-blur-xl ${
                  option.highlighted
                    ? 'border-emerald-300/50 bg-emerald-300/[0.08] shadow-2xl shadow-emerald-500/10'
                    : 'border-white/10 bg-white/[0.045]'
                }`}
              >
                {option.highlighted && (
                  <div className="absolute -top-4 left-6 rounded-full bg-emerald-300 px-4 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
                    Best fit
                  </div>
                )}
                <div className={`mb-6 h-2 w-24 rounded-full bg-gradient-to-r ${option.tone}`} />
                <p className="text-sm font-semibold text-emerald-200">{option.badge}</p>
                <h3 className="mt-2 text-2xl font-black">{option.name}</h3>
                <p className="mt-3 text-3xl font-black text-white">{option.price}</p>
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">{option.tagline}</p>

                <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
                  <Spec label="CPU" value={option.cpu} />
                  <Spec label="RAM" value={option.ram} />
                  <Spec label="SSD" value={option.storage} />
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-bold text-white">Phù hợp cho</p>
                  <ul className="space-y-2">
                    {option.bestFor.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-3 text-sm font-bold text-white">Bao gồm</p>
                  <ul className="space-y-2">
                    {option.included.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="use-cases" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Use case</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Không mua máy. Mua năng lực vận hành mới.</h2>
              <p className="mt-5 text-slate-300">BơBox là điểm neo hữu hình để triển khai các workflow AI/data/automation mà doanh nghiệp nhỏ có thể hiểu và dùng ngay.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Triển khai pilot</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">Từ nhu cầu thật đến máy chạy thật trong 7-14 ngày.</h2>
                <p className="mt-5 text-slate-300">Cách làm ưu tiên an toàn: bắt đầu nhỏ, có workflow mẫu, đo hiệu quả rồi mới mở rộng.</p>
              </div>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-emerald-300 font-black text-slate-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/15 via-cyan-300/10 to-blue-500/10 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl lg:p-12">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Muốn dựng một BơBox thử nghiệm?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Bắt đầu bằng một buổi khảo sát workflow: đang mất thời gian ở đâu, dữ liệu nằm ở đâu, và BơBox nên tự động hoá bước nào trước.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@haobi.io.vn?subject=Tu%20van%20BoBox%20OpenClaw" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-emerald-200">
                Gửi yêu cầu tư vấn <ArrowRight size={20} />
              </a>
              <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10">
                <Home size={20} /> Về trang chủ
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-xs font-bold text-slate-200">{value}</p>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Gauge; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
      <Icon className="mx-auto mb-2 h-5 w-5 text-emerald-300" />
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-black text-white">{value}</p>
    </div>
  );
}
