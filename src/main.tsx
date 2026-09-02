import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'motion/react';
import './index.css';

type Card = { n: string; title: string; body: string };

const cards: Card[] = [
  { n: '01', title: 'AI Box', body: 'OpenClaw cài sẵn trên máy riêng. Cắm điện, kết nối, bắt đầu làm việc.' },
  { n: '02', title: 'AI Employee', body: 'Một agent cho một vai trò thật: báo cáo, follow-up, nội dung, vận hành.' },
  { n: '03', title: 'Automation', body: 'n8n, Sheets, Power BI, email và dữ liệu chạy thành workflow có kiểm soát.' },
  { n: '04', title: 'Training', body: 'Workshop thực chiến để đội ngũ dùng AI như công cụ làm việc, không chỉ demo.' },
];

const services = ['Cài OpenClaw riêng', 'Thiết kế agent theo vai trò', 'Kết nối dữ liệu doanh nghiệp', 'Làm dashboard Power BI', 'Tự động hóa quy trình', 'Managed AI hằng tháng'];
const orbit = ['Research', 'Report', 'Follow-up', 'Content', 'Dashboard', 'Approve'];
const words = ['AI Box', 'Agent', 'Workflow', 'Dashboard'];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }} whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>{children}</motion.div>;
}

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((v) => (v + 1) % words.length), 1800); return () => clearInterval(id); }, []);
  return <motion.span key={words[i]} className="rotating" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>{words[i]}</motion.span>;
}

function DecryptedText({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const chars = useMemo(() => text.split(''), [text]);
  return <span className="decrypt" aria-label={text}>{chars.map((char, i) => <motion.span aria-hidden="true" key={`${char}-${i}`} initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: reduce ? 0 : i * 0.025, duration: 0.35 }}>{char}</motion.span>)}</span>;
}

function App() {
  const reduce = useReducedMotion();
  return (
    <div className="shell">
      <div className="aurora" aria-hidden="true" />
      <header className="nav"><a className="brand" href="#top">HaoBi</a><nav aria-label="Điều hướng"><a href="#services">Dịch vụ</a><a href="#why">Vì sao ở lại</a><a href="#process">Quy trình</a><a href="mailto:lienhe@haobi.io.vn">Liên hệ</a></nav></header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <FadeIn><p className="eyebrow"><DecryptedText text="AI → BI · DATA · AUTOMATION" /></p></FadeIn>
            <FadeIn delay={0.08}><h1>Một người.<br /><span>Một đội AI.</span></h1></FadeIn>
            <FadeIn delay={0.16}><p className="lead">HaoBi biến OpenClaw, Power BI và automation thành hệ thống AI riêng: <RotatingWord /> làm việc quanh Ba.</p></FadeIn>
            <FadeIn delay={0.24}><div className="actions"><a className="button" href="mailto:lienhe@haobi.io.vn?subject=Triển khai HaoBi">Bắt đầu tư vấn</a><a className="ghost" href="#services">Xem dịch vụ</a></div></FadeIn>
          </div>
          <motion.div className="orb-card" initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, rotate: -2 }} animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} aria-label="HaoBi operating system visual">
            <div className="grid-glow" /><motion.div className="orb" animate={reduce ? {} : { y: [0, -12, 0], rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
            {orbit.map((x, i) => <motion.span className="chip" key={x} style={{ '--a': `${i * 60}deg` } as React.CSSProperties} animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>{x}</motion.span>)}
            <div className="metric top"><span>Agents</span><strong>06</strong></div><div className="metric mid"><span>Workflows</span><strong>24/7</strong></div><div className="metric bot"><span>Human approval</span><strong>ON</strong></div>
          </motion.div>
        </section>
        <section id="services" className="section"><FadeIn><p className="eyebrow">REACT BITS · CHROMA GRID</p></FadeIn><div className="card-grid">{cards.map((card, i) => <FadeIn key={card.n} delay={i * 0.05}><motion.article className="card" whileHover={reduce ? {} : { y: -10, rotateX: 3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}><span>{card.n}</span><h2>{card.title}</h2><p>{card.body}</p></motion.article></FadeIn>)}</div></section>
        <section id="why" className="sticky section"><FadeIn><p className="eyebrow">SCROLL REVEAL · GIỮ NGƯỜI XEM</p></FadeIn><motion.h2 className="mega" initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5 }}>Mỗi cuộn chuột mở thêm một lớp: vấn đề, hệ thống, kết quả.</motion.h2><div className="marquee" aria-hidden="true"><span>OpenClaw · Power BI · n8n · AI Employee · Dashboard · Workflow · </span><span>OpenClaw · Power BI · n8n · AI Employee · Dashboard · Workflow · </span></div></section>
        <section id="process" className="split section"><FadeIn><div><p className="eyebrow">BORING PROCESS, REAL OUTCOME</p><h2 className="section-title">Không bán chatbot. Bán hệ thống làm việc.</h2></div></FadeIn><div className="service-list">{services.map((item, i) => <FadeIn key={item} delay={i * 0.04}><motion.div className="service" whileHover={reduce ? {} : { x: 8 }}><span>{String(i + 1).padStart(2, '0')}</span>{item}</motion.div></FadeIn>)}</div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} HaoBi</span><span>OpenClaw · Power BI · n8n</span><a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
