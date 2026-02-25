import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteView from './components/WebsiteView';
import HmsLandingPage from './pages/HmsLandingPage';
import EcoHubPage from './pages/EcoHubPage';
import BlogHomePage from './pages/BlogHomePage';
import ArticleDetail from './pages/ArticleDetail';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteView />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/hmsxanh" element={<HmsLandingPage />} />
        <Route path="/eco" element={<EcoHubPage />} />
        <Route path="/blog" element={<BlogHomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
