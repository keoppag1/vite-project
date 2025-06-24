import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import App from './App';
import LinksList from './LinksList';
import Navbar from './Navbar';
import Footer from './Footer';
import LinkDetail from './LinkDetail';

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App onlyContent />} />
        <Route path="/categoria/:categoria" element={<LinksList />} />
        <Route path="/link/:id" element={<LinkDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);