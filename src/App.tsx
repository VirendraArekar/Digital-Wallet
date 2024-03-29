import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;
