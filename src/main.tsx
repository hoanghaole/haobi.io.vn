import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'motion/react';
import './index.css';

type Card = { title: string; body: string; fix?: string };
type Persona = { id: string; label: string; pain: string; does: string[]; cta: string };

const pains: Card[] = [
  { title: 'AI rời rạc', body: 'ChatGPT, Claude, Gemini… mỗi thứ một nơi. Không có quy trình chung, không nhớ bối cảnh dài hạn.', fix: 'Gom vào một workspace có agent, skill, memory và approval.' },
  { title: 'Dữ liệu nằm im', body: 'Excel, Google Sheet, Power BI, file nội bộ có nhiều thông tin nhưng không tự biến thành hành động.', fix: 'Kết nối dữ liệu với workflow và báo cáo dễ hiểu.' },
  { title: 'Việc lặp ăn thời gian', body: 'Báo cáo, tổng hợp, follow-up, nhắc việc, soạn nội dung — ngày nào cũng lặp.', fix: 'Biến việc lặp thành agent hoặc automation có giám sát.' },
  { title: 'Sợ AI làm sai', body: 'Không rõ AI được quyền làm gì, khi nào cần hỏi, ai chịu trách nhiệm.', fix: 'Thiết kế quyền hạn, log và human approval từ đầu.' },
];

const layers = [
  ['AI Workspace', 'OpenClaw, agent, skill, memory, channel, approval'],
  ['Business Data', 'Power BI, Sheets, files, CRM, internal docs'],
  ['Automation', 'n8n, email, calendar, report, notification'],
];

const timeline = [
  ['08:00', 'Morning brief', 'AI đọc lịch, việc tồn, email quan trọng và tóm tắt hôm nay cần chú ý gì.'],
  ['10:00', 'Data check', 'Agent kiểm tra số liệu, phát hiện điểm bất thường và gợi ý câu hỏi cần xem.'],
  ['14:00', 'Report explained', 'Power BI không chỉ hiện dashboard. HaoBi giải thích biến động và việc cần làm tiếp.'],
  ['16:00', 'Follow-up draft', 'AI soạn email hoặc tin nhắn follow-up, nhưng dừng lại chờ bạn duyệt.'],
  ['18:00', 'Daily memory', 'Hệ thống ghi lại việc đã làm, việc còn tồn và đề xuất ưu tiên cho ngày mai.'],
];

const personas: Persona[] = [
  { id: 'owner', label: 'Chủ DN', pain: 'Muốn nắm tình hình nhưng không muốn đọc từng file, từng group, từng báo cáo.', does: ['daily brief', 'sales snapshot', 'issue alert', 'follow-up draft'], cta: 'Xây dashboard điều hành AI' },
  { id: 'manager', label: 'Manager', pain: 'Việc nhiều, follow-up nhiều, báo cáo nhiều.', does: ['nhắc việc tồn', 'tổng hợp tiến độ', 'soạn update', 'phát hiện bottleneck'], cta: 'Tạo agent quản lý công việc' },
  { id: 'bi', label: 'Data / BI', pain: 'Dashboard có nhưng người xem vẫn hỏi “vậy nghĩa là gì?”', does: ['giải thích biến động', 'gợi ý câu hỏi phân tích', 'tạo narrative report', 'cảnh báo bất thường'], cta: 'Kết nối Power BI với AI' },
  { id: 'sales', label: 'Marketing / Sales', pain: 'Cần nội dung, follow-up, chăm lead liên tục.', does: ['draft content', 'draft email', 'phân loại lead', 'nhắc follow-up'], cta: 'Xây AI sales assistant' },
  { id: 'ops', label: 'Operations', pain: 'Quy trình lặp, dễ sót, nhiều bước thủ công.', does: ['checklist tự động', 'notification', 'approval flow', 'log vận hành'], cta: 'Tự động hóa quy trình đầu tiên' },
];

const packages = [
  ['Setup AI Workspace', 'Cài hệ thống AI riêng để bắt đầu làm việc thật.', 'OpenClaw setup · model/API/channel · agent cơ bản · approval · backup/recovery'],
  ['Build AI Employee', 'Thiết kế một agent cho một vai trò cụ thể.', 'phân tích công việc · quyền hạn · dữ liệu · skill/workflow · test case thật'],
  ['Managed AI System', 'HaoBi theo dõi, cập nhật và cải tiến hệ thống AI hằng tháng.', 'monitoring · update workflow · backup check · support lỗi · cải tiến định kỳ'],
];

const proof = ['OpenClaw agent workspace', 'Power BI narrative report', 'n8n workflow automation', 'Obsidian knowledge base', 'AI content workflow', 'Human approval flow'];
const loop = ['OpenClaw', 'Power BI', 'n8n', 'AI Employee', 'Human Approval', 'Second Brain'];
const verbs = ['đọc dữ liệu', 'tạo báo cáo', 'soạn follow-up', 'xin duyệt', 'ghi log'];

function Scramble({ text }: { text: string }) {
  const reduce = useReducedMotion();
  return <span className="scramble" aria-label={text}>{text.split('').map((c, i) => <motion.span aria-hidden="true" key={i} initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0)' }} transition={{ delay: reduce ? 0 : i * .018, duration: .28 }}>{c}</motion.span>)}</span>;
}

function Count({ to, suffix = '' }: { to: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => { if (reduce) return; let f = 0; const id = setInterval(() => { f += 1; setN(Math.round(to * Math.min(f / 28, 1))); if (f >= 28) clearInterval(id); }, 28); return () => clearInterval(id); }, [to, reduce]);
  return <>{n}{suffix}</>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={{ opacity: 0, y: reduce ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: .55, delay, ease: 'easeOut' }}>{children}</motion.div>;
}

function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(personas[0]);
  const [verb, setVerb] = useState(0);
  useEffect(() => { if (reduce) return; const id = setInterval(() => setVerb(v => (v + 1) % verbs.length), 1700); return () => clearInterval(id); }, [reduce]);
  return <div className="site">
    <header className="nav"><a className="brand" href="#top">HaoBi</a><nav><a href="#how">Cách hoạt động</a><a href="#use-cases">Use cases</a><a href="#services">Dịch vụ</a><a className="nav-cta" href="mailto:lienhe@haobi.io.vn?subject=Tu van HaoBi">Tư vấn</a></nav></header>
    <main id="top">
      <section className="hero section"><motion.div className="scrollbar" style={{ scaleX: 1 }} />
        <div>
          <Reveal><p className="eyebrow"><Scramble text="PRIVATE AI OPERATING SYSTEM" /></p></Reveal>
          <Reveal delay={.05}><h1>Một hệ thống AI riêng <span className="swap"><motion.span key={verb} initial={{y:26,opacity:0,filter:'blur(8px)'}} animate={{y:0,opacity:1,filter:'blur(0)'}} exit={{y:-20,opacity:0}}>{verbs[verb]}</motion.span></span> cho công việc thật.</h1></Reveal>
          <Reveal delay={.1}><p className="lead">HaoBi giúp cá nhân và doanh nghiệp nhỏ triển khai OpenClaw, Power BI và automation thành một đội AI nhỏ: biết đọc dữ liệu, tạo báo cáo, theo dõi việc lặp lại và chờ bạn phê duyệt trước khi hành động.</p></Reveal><Reveal delay={.14}><div className="stats"><strong><Count to={1} /></strong><span>workspace riêng</span><strong><Count to={5} /></strong><span>lớp workflow</span><strong><Count to={100} suffix="%" /></strong><span>human approval</span></div></Reveal>
          <Reveal delay={.15}><div className="actions"><a className="button" href="mailto:lienhe@haobi.io.vn?subject=Tu van trien khai HaoBi">Tư vấn triển khai</a><a className="link" href="#how">Xem cách hoạt động</a></div><p className="trust">Private by design · Human approval · Built for real workflows</p></Reveal>
        </div>
        <Reveal delay={.12}><div className="map" aria-label="Workflow map"><motion.div className="pulse" animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [.45, .75, .45] }} transition={{ duration: 3.2, repeat: Infinity }} /><div className="you">You</div>{['Data','Agent','Report','Approval','Automation'].map((x,i)=><motion.div key={x} className={`node n${i}`} whileHover={reduce ? {} : { y: -4 }}>{x}</motion.div>)}<svg viewBox="0 0 420 420"><path d="M210 210 L90 110 M210 210 L330 110 M210 210 L90 315 M210 210 L330 315 M210 210 L210 60"/></svg></div></Reveal>
      </section>

      <section className="section"><Reveal><p className="eyebrow">PAIN MIRROR</p><h2>Bạn không thiếu AI. Bạn thiếu một hệ thống làm việc được.</h2></Reveal><div className="grid four">{pains.map((p,i)=><Reveal key={p.title} delay={i*.04}><motion.article className="card glow" whileHover={reduce ? {} : { y: -6 }}><h3>{p.title}</h3><p>{p.body}</p><small>{p.fix}</small></motion.article></Reveal>)}</div></section>

      <section id="how" className="section system"><Reveal><p className="eyebrow">SYSTEM MAP</p><h2>HaoBi kết nối 3 lớp thành một hệ điều hành công việc.</h2></Reveal><div className="layers">{layers.map(([title,body],i)=><Reveal key={title} delay={i*.06}><article className="layer"><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div><Reveal><div className="pipeline">Observe <span/> Draft <span/> Approve <span/> Act <span/> Log</div></Reveal></section>

      <section className="section day"><Reveal><p className="eyebrow">DAY IN LIFE</p><h2>Một ngày làm việc với HaoBi</h2></Reveal><div className="timeline">{timeline.map(([time,title,body],i)=><Reveal key={time} delay={i*.04}><article><time>{time}</time><div><h3>{title}</h3><p>{body}</p><a href="mailto:lienhe@haobi.io.vn?subject=Toi muon workflow nay">Tôi muốn workflow này</a></div></article></Reveal>)}</div></section>

      <section className="react-loop" aria-hidden="true"><div>{loop.concat(loop).map((x,i)=><span key={i}>{x}</span>)}</div></section>

      <section id="use-cases" className="section persona"><Reveal><p className="eyebrow">USE CASE SELECTOR</p><h2>Bạn muốn đội AI làm gì trước?</h2></Reveal><div className="tabs" role="tablist">{personas.map((p)=><button key={p.id} onClick={()=>setActive(p)} className={active.id===p.id?'on':''}>{p.label}{active.id===p.id&&<motion.span layoutId="tab"/>}</button>)}</div><motion.article key={active.id} className="persona-card" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><p>{active.pain}</p><ul>{active.does.map(x=><li key={x}>{x}</li>)}</ul><a className="button" href={`mailto:lienhe@haobi.io.vn?subject=${encodeURIComponent(active.cta)}`}>{active.cta}</a></motion.article></section>

      <section id="services" className="section noise"><Reveal><p className="eyebrow">SERVICES</p><h2>Bắt đầu nhỏ. Mở rộng khi có kết quả.</h2></Reveal><div className="grid three">{packages.map(([title,body,items],i)=><Reveal key={title} delay={i*.05}><article className="card package"><h3>{title}</h3><p>{body}</p><small>{items}</small><a href="mailto:lienhe@haobi.io.vn?subject=Hoi goi HaoBi">Trao đổi gói này</a></article></Reveal>)}</div></section>

      <section className="section safety"><Reveal><p className="eyebrow">SAFETY & CONTROL</p><h2>AI làm việc trong giới hạn bạn đặt.</h2><p className="lead small">Mục tiêu không phải để AI thay bạn. Mục tiêu là để AI làm phần lặp lại, còn quyết định vẫn nằm trong tay bạn.</p></Reveal><div className="badges">{['Approval ON','Logs','Permissions','Backup','Local / Private'].map(x=><span key={x}>{x}</span>)}</div></section>

      <section className="section proof-section"><Reveal><p className="eyebrow">PROOF</p><h2>Xây từ công việc thật, không phải demo sân khấu.</h2></Reveal><div className="terminal"><span>hao@bi</span><code>observe → draft → ask approval → act → log</code></div><div className="proof-grid">{proof.map(x=><Reveal key={x}><span>{x}</span></Reveal>)}</div></section>

      <section className="final section"><Reveal><h2>Muốn có một đội AI riêng cho công việc của bạn?</h2><p>Bắt đầu bằng một buổi audit nhỏ. Chỉ cần chọn một việc đang lặp lại và biến nó thành workflow đầu tiên.</p><a className="button" href="mailto:lienhe@haobi.io.vn?subject=Audit nho voi HaoBi">Tư vấn với HaoBi</a></Reveal></section>
    </main>
    <footer><span>© {new Date().getFullYear()} HaoBi</span><span>OpenClaw · Power BI · n8n</span><a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
