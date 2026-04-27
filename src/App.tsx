import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CareerHomePage from './pages/CareerHomePage';
import CareerStoryPage from './pages/CareerStoryPage';
import CareerLabPage from './pages/CareerLabPage';
import CareerBlogPage from './pages/CareerBlogPage';
import CareerBlogPostPage from './pages/CareerBlogPostPage';
import ScreenshotKnowledgePage from './pages/ScreenshotKnowledgePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CareerHomePage />} />
        <Route path="/story" element={<CareerStoryPage />} />
        <Route path="/lab" element={<CareerLabPage />} />
        <Route path="/blog" element={<CareerBlogPage />} />
        <Route path="/blog/:slug" element={<CareerBlogPostPage />} />
        <Route path="/screenshot-to-knowledge" element={<ScreenshotKnowledgePage />} />
        <Route path="*" element={<CareerHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
