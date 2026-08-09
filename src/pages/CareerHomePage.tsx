import { ArrowRight, BarChart3, Bot, BriefcaseBusiness, CheckCircle2, Circle, Github, Linkedin, Mail, Network, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';

const pillars = [
  {
    icon: BarChart3,
    title: 'Data & Business Intelligence',
    text: 'Biến dữ liệu vận hành thành dashboard rõ ràng, giúp chủ doanh nghiệp nhìn thấy doanh thu, chi phí, tồn kho và hiệu suất đội ngũ.',
  },
  {
    icon: Workflow,
    title: 'Automation & Workflow',
    text: 'Thiết kế luồng tự động với n8n, Google Workspace, Lark, Telegram và các hệ thống nội bộ để giảm việc lặp lại hằng ngày.',
  },
  {
    icon: Network,
    title: 'Obsidian & Knowledge OS',
    text: 'Biến ghi chú rời rạc, sách, screenshot và kinh nghiệm làm việc thành hệ thống tri thức cá nhân có thể tìm lại, liên kết và tái sử dụng.',
  },
  {
    icon: Bot,
    title: 'AI Operator System',
    text: 'Xây dựng đội AI agent làm trợ lý vận hành: theo dõi, tóm tắt, nhắc việc, tạo báo cáo và hỗ trợ ra quyết định.',
  },
];

const projects = [
  'Power BI dashboard cho vận hành HEAD Honda',
  'Obsidian second brain: hệ thống ghi chú, đọc sách và quản lý tri thức cá nhân',
  'OpenClaw personal AI operating system',
  'n8n workflow cho báo cáo, backup và thông báo định kỳ',
  'Haobi career lab: ghi chép hành trình chuyển nghề sang Power BI, Obsidian và AI/no-code',
  'Screenshot-to-Knowledge OS: tự động biến ảnh chụp màn hình thành note Obsidian',
];

const principles = ['Tối giản', 'Thực chiến', 'Ghi chú để dùng lại', 'Dữ liệu nói thật'];

export default function CareerHomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <SiteHeader sectionLinks={[{ href: '#work', label: 'Công việc' }, { href: '#projects', label: 'Dự án' }]} />

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Power BI / Obsidian / AI-no-code / Operations</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Biến dữ liệu, ghi chú và AI thành hệ thống vận hành thực tế.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Haobi là không gian nghề nghiệp của Hao: chia sẻ cách dùng Power BI, Obsidian, automation no-code và AI agent để biến Excel, tri thức rời rạc và kinh nghiệm vận hành thành dashboard, insight và hành động rõ ràng.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                Xem định hướng <ArrowRight size={16} />
              </a>
              <Link to="/story" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
                Đọc câu chuyện nghề nghiệp
              </Link>
              <Link to="/blog" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
                Vào blog
              </Link>
            </div>
          </div>

          <aside className="border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-5">
              <span className="text-sm font-medium text-neutral-500">Current focus</span>
              <Circle size={10} className="fill-neutral-950" />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-4xl font-semibold">2026</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Giai đoạn xây lại portfolio, thương hiệu cá nhân và hệ thống làm việc dựa trên dữ liệu, tri thức và AI.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6">
                <Metric value="8+" label="năm vận hành" />
                <Metric value="4" label="trục năng lực" />
                <Metric value="24/7" label="AI operator" />
                <Metric value="1" label="career OS" />
              </div>
            </div>
          </aside>
        </section>

        <section id="work" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Focus areas</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Bốn trục nghề nghiệp chính</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-600">Không màu mè, không nói quá. Mỗi trục đều phải dẫn tới sản phẩm thật, case study thật, hệ thống ghi chú thật hoặc quy trình vận hành dùng được.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="border border-neutral-200 bg-white p-6">
                  <pillar.icon className="mb-8 text-neutral-950" size={26} />
                  <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Dự án nên xuất hiện trên Haobi</h2>
              <p className="mt-5 text-sm leading-7 text-neutral-600">Trang này là cửa chính cho định vị mới: Power BI + Obsidian + AI/no-code cho vận hành thực tế.</p>
            </div>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {projects.map((project) => (
                <div key={project} className="flex items-start gap-4 py-5">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-neutral-950" />
                  <p className="text-lg tracking-tight text-neutral-800">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <BriefcaseBusiness size={30} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">Nguyên tắc thiết kế mới</h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-neutral-800">
              {principles.map((item) => (
                <div key={item} className="bg-neutral-950 p-6 text-lg font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm text-neutral-500 md:flex-row md:items-center">
          <p>© Haobi — Career OS by Hao & Bơ.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={18} /></a>
            <a href="https://github.com/" aria-label="GitHub" className="hover:text-black"><Github size={18} /></a>
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
