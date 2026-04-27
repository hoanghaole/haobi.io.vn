import { ArrowRight, Bot, Camera, CheckCircle2, Database, FolderSync, MessageCircle, Network, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const flow = [
  { icon: Camera, title: 'Chụp màn hình', text: 'Người dùng vẫn giữ thói quen cũ: chụp màn hình chat, slide, lỗi phần mềm, dashboard hoặc bài viết hay.' },
  { icon: FolderSync, title: 'Drive sync', text: 'Ảnh tự rơi vào thư mục Screenshot Inbox trên Google Drive hoặc OneDrive.' },
  { icon: Network, title: 'n8n quản trị', text: 'n8n phát hiện file mới, chống xử lý trùng, log trạng thái và điều phối các bước xử lý.' },
  { icon: Bot, title: 'AI đọc & phân loại', text: 'Vision/OCR trích xuất nội dung, nhận diện loại ảnh, gợi tiêu đề, tag, next action và độ tin cậy.' },
  { icon: Database, title: 'Obsidian note', text: 'AI tạo note Markdown sạch, lưu vào Inbox/Screenshots để sau đó 5S vào Knowledge, Projects hoặc Planning.' },
  { icon: MessageCircle, title: 'OpenClaw nhớ & nói chuyện', text: 'OpenClaw đọc note, tìm lại nội dung và trả lời bằng hội thoại khi người dùng cần recall.' },
];

const useCases = [
  'Chụp bài viết hay trên Facebook/LinkedIn rồi tự thành clipping note.',
  'Chụp lỗi phần mềm/n8n/Power BI rồi tự tạo issue note có hướng xử lý.',
  'Chụp dashboard hoặc bảng số liệu rồi AI tóm tắt insight chính.',
  'Chụp đoạn chat công việc rồi tự rút việc cần làm và lưu vào Planning.',
];

const principles = [
  'Không đổi thói quen người dùng',
  'Obsidian là source of truth',
  'AI ghi draft, con người vẫn kiểm soát',
  'Có log, retry, review queue — không silent failure',
];

export default function ScreenshotKnowledgePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.28em]">Haobi</Link>
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href="#flow" className="hover:text-black">Flow</a>
            <a href="#use-cases" className="hover:text-black">Use cases</a>
            <a href="#mvp" className="hover:text-black">MVP</a>
            <Link to="/blog" className="hover:text-black">Blog</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Micro product / Office notes automation</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">Chụp màn hình là ghi chú.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Screenshot-to-Knowledge OS biến thư mục ảnh chụp màn hình thành hệ thống ghi chú sống: AI đọc ảnh, phân loại, tạo note Obsidian và để OpenClaw tìm lại bằng hội thoại.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#flow" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                Xem cách hoạt động <ArrowRight size={16} />
              </a>
              <Link to="/blog" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold hover:border-neutral-950">Viết case study</Link>
            </div>
          </div>

          <aside className="border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <p className="text-sm font-medium text-neutral-500">Pain point</p>
            <blockquote className="mt-8 text-3xl font-semibold leading-tight tracking-tight">
              “Ảnh chụp màn hình chứa rất nhiều tri thức, nhưng thường bị bỏ quên trong một thư mục không ai tìm lại.”
            </blockquote>
            <div className="mt-10 border-t border-neutral-200 pt-6 text-sm leading-7 text-neutral-600">
              Dành cho dân văn phòng, operator, analyst, maker và bất kỳ ai thường xuyên lưu ý tưởng bằng screenshot.
            </div>
          </aside>
        </section>

        <section id="flow" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Workflow</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Từ ảnh chết thành tri thức sống</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {flow.map((step) => (
                <article key={step.title} className="border border-neutral-200 bg-white p-6">
                  <step.icon size={26} className="mb-8" />
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Use cases</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Các tình huống văn phòng rất thật</h2>
            </div>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {useCases.map((item) => (
                <div key={item} className="flex gap-4 py-5">
                  <CheckCircle2 size={20} className="mt-1 shrink-0" />
                  <p className="text-lg tracking-tight text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mvp" className="bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <ShieldCheck size={32} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">MVP an toàn trước, thông minh sau</h2>
              <p className="mt-5 leading-8 text-neutral-400">
                Bản đầu tiên chỉ ghi note vào Inbox/Screenshots, có log và review queue. Khi đủ tin cậy mới tự phân loại sâu vào Projects, Knowledge hoặc Planning.
              </p>
            </div>
            <div className="grid gap-px bg-neutral-800 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="bg-neutral-950 p-6 text-lg font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
