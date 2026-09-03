import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import LightRays from './LightRays';
import './index.css';

const steps = ['AI đọc dữ liệu', 'BI hiểu vận hành', 'Con người quyết định'];

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
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            HaoBi Founder OS
          </motion.p>
          <motion.h1 id="title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Từ AI đến BI
          </motion.h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            HaoBi biến dữ liệu, dashboard và workflow rời rạc thành một hệ điều hành công việc: AI hỗ trợ đọc hiểu, BI giúp ra quyết định, Ba vẫn giữ quyền kiểm soát cuối cùng.
          </motion.p>
          <motion.div className="flow" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            {steps.map((step) => (
              <motion.span key={step} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
                {step}
              </motion.span>
            ))}
          </motion.div>
          <motion.a className="button" href="mailto:lienhe@haobi.io.vn?subject=Tu AI den BI" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}>
            Bắt đầu từ một workflow
          </motion.a>
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
