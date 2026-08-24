import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@rtcamp/frappe-ui-react';
import './index.css';

type Page = { number: string; slug: string; title: string; kicker: string; description: string; points: string[]; offer: string };

const pricing = [
  { name: 'START', price: 'Từ 2.000.000đ', description: 'Cài đặt và đưa một quy trình AI đầu tiên vào hoạt động.', items: ['Audit nhu cầu', 'Cài đặt OpenClaw hoặc agent', '1 workflow cơ bản', 'Bàn giao hướng dẫn'] },
  { name: 'GROW', price: 'Từ 6.000.000đ', description: 'Xây một trợ lý AI gắn với dữ liệu và công việc thật.', items: ['Thiết kế workflow riêng', 'Kết nối Power BI, n8n, Sheets', 'Phân quyền và phê duyệt', '30 ngày hỗ trợ'] },
  { name: 'SCALE', price: 'Liên hệ', description: 'Vận hành cả hệ thống AI cho doanh nghiệp.', items: ['Nhiều agent chuyên ngành', 'Managed AI và monitoring', 'Đào tạo đội ngũ', 'Bảo trì định kỳ'] },
];

const pages: Page[] = [
  { number: '01', slug: 'setup', kicker: 'CÀI ĐẶT · CẤU HÌNH · CỨU LỖI', title: 'Đưa AI vào guồng.', description: 'OpenClaw chạy đúng từ ngày đầu: máy chủ, model, quyền hạn, kênh giao tiếp và quy trình an toàn.', points: ['Cài đặt local hoặc VPS', 'Kết nối Telegram, email, file, trình duyệt', 'Debug, backup, log và bàn giao'], offer: 'Setup & support' },
  { number: '02', slug: 'ai-employee', kicker: 'AI EMPLOYEE', title: 'Một agent. Một việc thật.', description: 'Biến tác vụ lặp lại thành một nhân viên AI biết theo dõi, suy nghĩ và hành động trong giới hạn được giao.', points: ['Sales, HR, marketing, vận hành', 'Có quy trình phê duyệt trước khi hành động', 'Đo thời gian tiết kiệm và kết quả'], offer: 'AI employee' },
  { number: '03', slug: 'training', kicker: 'ĐÀO TẠO · WORKSHOP · PLAYBOOK', title: 'Đội ngũ biết cách dùng AI.', description: 'Không dừng ở buổi demo. Đội ngũ có playbook, kỹ năng và workflow để tự vận hành sau khi bàn giao.', points: ['Workshop theo vai trò công việc', 'Template prompt, skill và workflow', 'Tư vấn 1:1 hoặc chương trình cho doanh nghiệp'], offer: 'Training & enablement' },
  { number: '04', slug: 'managed', kicker: 'MANAGED AI', title: 'Không muốn vận hành? Để HaoBi lo.', description: 'HaoBi quản lý hạ tầng, token, backup, bảo mật và sức khỏe agent để Ba tập trung vào kết quả.', points: ['VPS, domain, model và chi phí token', 'Monitoring, backup và cập nhật', 'Bảo trì định kỳ, hỗ trợ theo tháng'], offer: 'Managed service' },
  { number: '05', slug: 'vertical', kicker: 'AGENT CHUYÊN NGÀNH', title: 'AI hiểu ngành của Ba.', description: 'Không bán chatbot chung chung. HaoBi đóng gói agent cho dữ liệu, quy trình và ngôn ngữ riêng của từng ngành.', points: ['HR và báo cáo quản trị', 'Power BI, n8n và Google Sheets', 'Honda dealer, sales và chăm sóc khách hàng'], offer: 'Vertical agent' },
  { number: '06', slug: 'one-person', kicker: 'ONE-PERSON COMPANY', title: 'Một người. Một đội AI.', description: 'Dùng AI như đòn bẩy vận hành: nghiên cứu, nội dung, lead, báo cáo và follow-up chạy thành hệ thống.', points: ['Từ ý tưởng đến quy trình tự chạy', 'Mỗi agent phụ trách một vai trò', 'Tăng sản lượng mà không phình đội ngũ'], offer: 'AI operating system' },
];

function currentSlug() { return window.location.hash.replace(/^#\/?/, '') || 'home'; }

function App() {
  const [slug, setSlug] = useState(currentSlug());
  useEffect(() => { const onHash = () => setSlug(currentSlug()); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  const page = pages.find((item) => item.slug === slug);
  return <div className="site-shell" id="top">
    <header className="nav"><a className="brand" href="#home">Hao<span>Bi</span></a><nav aria-label="Điều hướng"><a href="#home">Trang chính</a><a href="#pricing">Giá</a><a href="mailto:lienhe@haobi.io.vn">Kết nối</a></nav></header>
    {slug === 'pricing' ? <main className="pricing"><p className="eyebrow">MINH BẠCH · GỌN · THEO GIÁ TRỊ</p><h1>Giá để<br /><em>bắt đầu.</em></h1><p className="lead">Bắt đầu nhỏ. Đo kết quả. Mở rộng khi hệ thống thực sự tạo ra giá trị.</p><div className="pricing-grid">{pricing.map((plan) => <article className="price-card" key={plan.name}><span className="mono">{plan.name}</span><h2>{plan.price}</h2><p>{plan.description}</p><ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><a className="price-link" href="mailto:lienhe@haobi.io.vn?subject=Trao đổi gói HaoBi">Trao đổi gói này ↗</a></article>)}</div></main> : !page ? <main className="home"><p className="eyebrow">HAOBI · AI OPERATIONS FOR REAL WORK</p><h1>Ba AI.<br /><em>2 BI.</em></h1><p className="lead">A → B: từ AI đến BI, từ dữ liệu đến quyết định. HaoBi biến quy trình doanh nghiệp thành một đội ngũ AI làm việc thật.</p><Button className="button" variant="solid" theme="gray" size="lg" link="#setup">Khám phá 6 hướng <span>↗</span></Button><div className="page-grid">{pages.map((item) => <a className="page-card" href={`#${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.title}</strong><small>{item.offer}</small></a>)}</div></main> : <main className="detail"><p className="eyebrow">{page.number} / 06 · {page.kicker}</p><h1>{page.title}</h1><p className="lead">{page.description}</p><div className="detail-grid"><div><p className="eyebrow">HAOBI LÀM GÌ</p><ul>{page.points.map((point) => <li key={point}>{point}</li>)}</ul></div><aside><span className="mono">MÔ HÌNH</span><strong>{page.offer}</strong><Button className="button" variant="solid" theme="gray" size="lg" link="mailto:lienhe@haobi.io.vn?subject=Trao đổi HaoBi">Trao đổi cùng HaoBi <span>↗</span></Button></aside></div><nav className="pager" aria-label="Các hướng HaoBi">{pages.map((item) => <a className={item.slug === page.slug ? 'active' : ''} href={`#${item.slug}`} key={item.slug}>{item.number}</a>)}</nav></main>}
    <footer><span>© {new Date().getFullYear()} HaoBi</span><span className="footer-note">AI → BI · Data · Automation</span><a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
