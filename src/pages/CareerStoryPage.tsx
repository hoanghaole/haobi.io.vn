import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const timeline = [
  ['Nền tảng', '8 năm trong môi trường HEAD Honda, học cách vận hành có quy trình, đo lường và cải tiến liên tục.'],
  ['Chuyển hóa', 'Tự học Power BI, n8n, AI Studio và nền tảng dữ liệu để biến kinh nghiệm vận hành thành năng lực công nghệ.'],
  ['Hiện tại', 'Xây Career OS: portfolio, case study, automation lab và đội AI agent hỗ trợ làm việc mỗi ngày.'],
];

export default function CareerStoryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black"><ArrowLeft size={16} /> Trang chủ</Link>
          <Link to="/lab" className="text-sm font-medium text-neutral-600 hover:text-black">Lab</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Career story</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">Từ vận hành truyền thống đến người xây hệ thống AI cho công việc.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">Đây là câu chuyện nghề nghiệp của Ba: không bắt đầu từ code, mà từ vận hành thật, dữ liệu thật và nhu cầu thật. Công nghệ là đòn bẩy để kinh nghiệm đó đi xa hơn.</p>

        <section className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
          {timeline.map(([title, text], index) => (
            <article key={title} className="grid gap-6 py-8 md:grid-cols-[120px_1fr]">
              <p className="text-sm font-semibold text-neutral-500">0{index + 1}</p>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-3 leading-7 text-neutral-600">{text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Định vị ngắn gọn</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-700">Một người vận hành biết dùng dữ liệu, tự động hóa và AI để tạo ra hệ thống làm việc gọn hơn, rõ hơn và bền hơn cho cá nhân/doanh nghiệp nhỏ.</p>
          <Link to="/lab" className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">Xem career lab <ArrowRight size={16} /></Link>
        </section>
      </main>
    </div>
  );
}
