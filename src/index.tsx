import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
import { BackgroundShader } from "./components/Background/BackgroundShader";
import MainContent from "./components/Layout/MainContent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50" aria-hidden="true">
        <BackgroundShader theme="dark" background={{ dark: "#101010" }} />
      </div>
      <Routes>
        <Route element={<MainContent />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

