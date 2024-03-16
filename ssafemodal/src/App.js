import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Header from "./Pages/Header.tsx";
import MySpace from "./Pages/MySpace.tsx";

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
