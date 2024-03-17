import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header.tsx";
import Home from "./Pages/Home.tsx";
import MySpace from "./Pages/MySpace.tsx";
import "./Styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mySpace" element={<MySpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
