import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <main className="maintenance" aria-labelledby="title">
      <p className="eyebrow">HaoBi.io.vn</p>
      <h1 id="title">Đang bảo trì</h1>
      <p>
        Ba với Bơ đang dọn lại nội dung, UI và hướng sản phẩm cho gọn hơn.
        Website sẽ quay lại khi đủ đẹp, đủ rõ, đủ đúng.
      </p>
      <a href="mailto:lienhe@haobi.io.vn">lienhe@haobi.io.vn</a>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
