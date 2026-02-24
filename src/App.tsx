import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteView from './components/WebsiteView';
import HmsLandingPage from './pages/HmsLandingPage';
import EcoHubPage from './pages/EcoHubPage';
import BlogHomePage from './pages/BlogHomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteView />} />
        <Route path="/hmsxanh" element={<HmsLandingPage />} />
        <Route path="/eco" element={<EcoHubPage />} />
        <Route path="/blog" element={<BlogHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
