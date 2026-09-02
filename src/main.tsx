import { StrictMode } from 'react';
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

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const reduce = useReducedMotion();
  return (
    <div className="shell">
      <header className="nav">
        <a className="brand" href="#top">HaoBi</a>
        <nav aria-label="Điều hướng">
          <a href="#services">Dịch vụ</a>
          <a href="#process">Quy trình</a>
          <a href="mailto:lienhe@haobi.io.vn">Liên hệ</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <FadeIn><p className="eyebrow">AI → BI · DATA · AUTOMATION</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1>Một người.<br /><span>Một đội AI.</span></h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="lead">HaoBi biến OpenClaw, Power BI và automation thành hệ thống AI riêng cho cá nhân và doanh nghiệp nhỏ.</p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="actions">
                <a className="button" href="mailto:lienhe@haobi.io.vn?subject=Triển khai HaoBi">Bắt đầu tư vấn</a>
                <a className="ghost" href="#services">Xem dịch vụ</a>
              </div>
            </FadeIn>
          </div>

          <motion.div
            className="orb-card"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, rotate: -2 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            aria-label="HaoBi operating system visual"
          >
            <div className="grid-glow" />
            <motion.div className="orb" animate={reduce ? {} : { y: [0, -12, 0], rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="metric top"><span>Agents</span><strong>06</strong></div>
            <div className="metric mid"><span>Workflows</span><strong>24/7</strong></div>
            <div className="metric bot"><span>Human approval</span><strong>ON</strong></div>
          </motion.div>
        </section>

        <section id="services" className="section">
          <FadeIn><p className="eyebrow">WHAT HAOBI BUILDS</p></FadeIn>
          <div className="card-grid">
            {cards.map((card, i) => (
              <FadeIn key={card.n} delay={i * 0.05}>
                <motion.article className="card" whileHover={reduce ? {} : { y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                  <span>{card.n}</span>
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="process" className="split section">
          <FadeIn>
            <div>
              <p className="eyebrow">BORING PROCESS, REAL OUTCOME</p>
              <h2 className="section-title">Không bán chatbot. Bán hệ thống làm việc.</h2>
            </div>
          </FadeIn>
          <div className="service-list">
            {services.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <motion.div className="service" whileHover={reduce ? {} : { x: 8 }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>{item}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} HaoBi</span>
        <span>OpenClaw · Power BI · n8n</span>
        <a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
