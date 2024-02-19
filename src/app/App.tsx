import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from "../pages/home-page/HomePage";
import NotFound404 from "../pages/not-found-404/not-found-404";
import ProductPage from '../pages/product-page/ProductPage';
import SearchPage from '../pages/search-page/SearchPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound404 />} />

      <Route path="/1" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
