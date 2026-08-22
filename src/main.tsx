import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const services = [
  {
    number: '01',
    title: 'Runtime',
    description: 'Power BI, n8n và AI chạy cùng nhau trong một hệ thống gọn, rõ, luôn sẵn sàng.',
    note: 'Vận hành',
  },
  {
    number: '02',
    title: 'Gateway',
    description: 'Kết nối dữ liệu, công cụ và quy trình. Mỗi tác vụ đi đúng đường, có kiểm soát.',
    note: 'Kết nối',
  },
  {
    number: '03',
    title: 'Agents',
    description: 'Những trợ lý AI thực dụng, được thiết kế cho công việc thật — không phải demo cho đẹp.',
    note: 'Hỗ trợ',
  },
];

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="nav">
        <a className="brand" href="#top" aria-label="HaoBi trang chủ">Hao<span>Bi</span></a>
        <nav aria-label="Điều hướng chính">
          <a className="nav-link" href="#system">Hệ thống</a>
          <a className="nav-link" href="mailto:lienhe@haobi.io.vn">Kết nối</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">HAOBI · AI OPERATING SYSTEM</p>
            <h1 id="hero-title">Trợ lý của bạn.<br /><em>Luôn sẵn sàng.</em></h1>
            <p className="lead">HaoBi xây hệ thống dữ liệu, tự động hóa và AI riêng cho công việc của bạn. Không thuê từ cloud. Không chạy ở nơi khác.</p>
            <div className="hero-actions">
              <a className="button" href="mailto:lienhe@haobi.io.vn?subject=Trao%20đổi%20cùng%20HaoBi">Bắt đầu cùng HaoBi <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#system">Xem cách hoạt động <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Trạng thái hệ thống">
            <span className="status-dot" aria-hidden="true" />
            <div><strong>System online</strong><small>Sẵn sàng cho quy trình tiếp theo</small></div>
            <span className="mono">24/7</span>
          </aside>
        </section>

        <section className="services" id="system" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="eyebrow">HƯỚNG TẬP TRUNG</p>
            <h2 id="services-title">Hệ điều hành<br />cho công việc thật.</h2>
            <p className="intro-copy">Một lớp vận hành riêng, từ dữ liệu đầu vào đến hành động cuối cùng.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div className="service-main">
                  <div className="service-heading"><h3>{service.title}</h3><span>{service.note}</span></div>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="statement" aria-labelledby="statement-title">
          <div>
            <p className="eyebrow">THUỘC VỀ BẠN</p>
            <h2 id="statement-title">Own your workflow.</h2>
          </div>
          <div className="statement-copy">
            <p>HaoBi biến dữ liệu, automation và AI thành năng lực vận hành thuộc về bạn.</p>
            <a className="text-link" href="mailto:lienhe@haobi.io.vn">Trao đổi với đội ngũ <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} HaoBi</span>
        <span className="footer-note">Data · Automation · AI</span>
        <a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
