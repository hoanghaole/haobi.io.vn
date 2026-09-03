import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import LightRays from './LightRays';
import './index.css';

const title = ['Từ', 'AI', 'đến', 'BI'];

function App() {
  return (
    <>
      <div className="rays-background">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
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
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
