import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const experiments = [
  {
    title: 'AI Agent Company',
    status: 'Đang xây',
    text: 'Tổ chức các agent như một đội làm việc: CEO, research, automation, operations và chief of staff.',
  },
  {
    title: 'Power BI Visuals',
    status: 'Prototype',
    text: 'Thử nghiệm custom visual và dashboard cho các bài toán vận hành, KPI và variance analysis.',
  },
  {
    title: 'n8n Operations',
    status: 'Live',
    text: 'Các workflow báo cáo buổi sáng, backup, thông báo và tích hợp Google Workspace/Telegram.',
  },
  {
    title: 'Obsidian Knowledge System',
    status: 'Live',
    text: 'Kho ghi chú nghề nghiệp, học tập và tài sản tri thức cá nhân được sắp xếp theo tinh thần 5S.',
  },
];

export default function CareerLabPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white"><ArrowLeft size={16} /> Trang chủ</Link>
          <Link to="/story" className="text-sm font-medium text-neutral-400 hover:text-white">Câu chuyện</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Career lab</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">Phòng thí nghiệm cho năng lực nghề nghiệp mới.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">Nơi gom các thử nghiệm thực tế của Haobi. Mỗi lab nên có đầu ra: bài viết, dashboard, automation, demo hoặc case study.</p>

        <section className="mt-16 grid gap-px bg-neutral-800 md:grid-cols-2">
          {experiments.map((item) => (
            <article key={item.title} className="bg-neutral-950 p-7">
              <div className="mb-10 flex items-center justify-between">
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-widest text-neutral-400">{item.status}</span>
                <ExternalLink size={16} className="text-neutral-600" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
