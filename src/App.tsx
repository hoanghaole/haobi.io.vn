import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteView from './components/WebsiteView';
import HmsLandingPage from './pages/HmsLandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteView />} />
        <Route path="/hmsxanh" element={<HmsLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
