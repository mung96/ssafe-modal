import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseHeader from "./BaseComponents/BaseHeader";
import Home from "./Pages/Home";
import MySpace from "./Pages/MySpace";
import "./Styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <BaseHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mySpace" element={<MySpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
