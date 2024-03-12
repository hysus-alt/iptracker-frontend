import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Android from "./pages/Android";
import Home from "./pages/Home";
import IOS from "./pages/IOS";
import Linux from "./pages/Linux";
import Mac from "./pages/Mac";
import Windows from "./pages/Windows";
import WindowsPhone from "./pages/WindowsPhone";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<IOS />} />
        <Route path="/windows-phone" element={<WindowsPhone />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/linux" element={<Linux />} />
      </Routes>
    </div>
  );
};

export default App;
