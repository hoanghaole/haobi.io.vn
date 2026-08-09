import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const services = [
  ['Power BI', 'Biến dữ liệu vận hành thành dashboard rõ ràng, dùng được mỗi ngày.'],
  ['n8n Automation', 'Kết nối công việc lặp lại thành luồng tự động có kiểm soát.'],
  ['AI Apps', 'Thiết kế ứng dụng AI nhỏ, sát quy trình, thay vì demo cho đẹp.'],
];

function App() {
  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#top" aria-label="HaoBi trang chủ">Hao<span>Bi</span></a>
      <a className="nav-link" href="mailto:lienhe@haobi.io.vn">Kết nối</a>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">DATA · AUTOMATION · AI</p>
        <h1 id="hero-title">Làm cho vận hành<br/><em>dễ nhìn, dễ chạy.</em></h1>
        <p className="lead">HaoBi là nơi Hao xây các hệ thống dữ liệu, tự động hóa và AI app thực dụng cho công việc thật.</p>
        <a className="button" href="mailto:lienhe@haobi.io.vn?subject=Trao%20đổi%20cùng%20HaoBi">Bắt đầu trao đổi <span aria-hidden="true">↗</span></a>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow">HƯỚNG TẬP TRUNG</p>
          <h2 id="services-title">Không thêm công cụ.<br/>Giải quyết đúng nút thắt.</h2>
        </div>
        <div className="service-grid">
          {services.map(([title, description], i) => <article className="service" key={title}>
            <span>0{i + 1}</span><h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>

      <section className="statement">
        <p>Khởi đầu lại, có chủ đích.</p>
        <p>Trang đang được xây dựng cùng những case study đầu tiên.</p>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} HaoBi</span><a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a></footer>
  </div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
