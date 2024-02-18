import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from "../pages/home-page/HomePage";
import NotFound404 from "../pages/not-found-404/not-found-404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
