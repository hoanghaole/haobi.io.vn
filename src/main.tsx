import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'motion/react';
import GalaxyField from './GalaxyField';
import './index.css';

const title = ['Từ', 'AI', 'đến', 'BI'];

const packages = [
  {
    name: 'Starter',
    purpose: 'Khởi động AI nội bộ gọn nhẹ',
    copy: 'Một Mini PC đặt tại văn phòng để gom tri thức, quy trình và các câu hỏi lặp lại vào một điểm vận hành riêng của doanh nghiệp.',
    points: ['OpenClaw cho trợ lý nội bộ', 'n8n cho workflow cơ bản', 'Dashboard theo dõi việc quan trọng'],
  },
  {
    name: 'Ops',
    purpose: 'Vận hành hằng ngày có kiểm soát',
    copy: 'Biến dữ liệu, biểu mẫu, tin nhắn và báo cáo rời rạc thành luồng làm việc có người phê duyệt, có log, có màn hình điều hành.',
    points: ['Workflow đa phòng ban', 'Bảng điều khiển theo vai trò', 'Quyền truy cập và dữ liệu do công ty giữ'],
  },
  {
    name: 'Pro',
    purpose: 'Hệ điều hành AI riêng cho doanh nghiệp',
    copy: 'Thiết kế lớp AI Ops riêng: trợ lý, tự động hóa, BI và playbook vận hành chạy trên hạ tầng tại văn phòng, không bán phần cứng thuần túy.',
    points: ['Kiến trúc OpenClaw + n8n + dashboard', 'Chuẩn hóa quy trình và tri thức', 'Mở rộng theo đội nhóm, dữ liệu, chính sách'],
  },
];

function App() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <>
      <div className="rays-background">
        <GalaxyField reducedMotion={reduceMotion} />
      </div>
      <main className="home" aria-labelledby="title">
        <section className="hero">
          <h1 id="title" aria-label="Từ AI đến BI">
            {title.map((word, index) => (
              <motion.span
                key={word}
                className={word === 'AI' || word === 'BI' ? 'title-hot' : ''}
                initial={{ opacity: 0, y: 90, rotateX: 55, filter: 'blur(24px)' }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                transition={{ delay: index * 0.16, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.i className="title-beam" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} />
          </h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            HaoBi biến dữ liệu, dashboard và workflow rời rạc thành một hệ điều hành công việc: AI hỗ trợ đọc hiểu, BI giúp ra quyết định, bạn vẫn giữ quyền kiểm soát cuối cùng.
          </motion.p>
          <motion.div className="actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <a className="button" href="#how">Xem cách làm</a>
            <a className="button secondary" href="mailto:lienhe@haobi.io.vn?subject=Goi trao doi HaoBi">Gọi trao đổi</a>
          </motion.div>
        </section>
        <section className="ai-ops" id="how" aria-labelledby="ai-ops-title">
          <div className="section-kicker">AI Ops Box / Mini PC tại văn phòng</div>
          <div className="section-heading">
            <h2 id="ai-ops-title">Một hộp AI riêng, đặt trong văn phòng, vận hành theo cách doanh nghiệp kiểm soát.</h2>
            <p>
              HaoBi không bán Mini PC như một món phần cứng. Chúng tôi đóng gói một hệ điều hành công việc riêng: OpenClaw cho đội trợ lý AI, n8n cho tự động hóa, dashboard cho quản trị. Dữ liệu, workflow và quyền quyết định vẫn nằm trong tay doanh nghiệp.
            </p>
          </div>
          <div className="package-grid" aria-label="Gói AI Ops Box">
            {packages.map((item) => (
              <article className="package-card" key={item.name}>
                <div>
                  <p className="package-name">{item.name}</p>
                  <h3>{item.purpose}</h3>
                  <p>{item.copy}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
