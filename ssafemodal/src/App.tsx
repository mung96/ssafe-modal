import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseHeader from "./components/header/Header";
import Home from "./pages/home/Home";
import MySpace from "./pages/myspace/MySpace";
import "./Styles/global.css";
import { NicknameProvider } from "./contexts/NicknameContext";

function App() {
  return (
    <NicknameProvider>
      <BrowserRouter>
        <BaseHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mySpace" element={<MySpace />} />
        </Routes>
      </BrowserRouter>
    </NicknameProvider>
  );
}

export default App;
