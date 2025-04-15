import { Routes, Route } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import LifeLog from "./pages/LifeLog";
import Pix from "./pages/Pix";
import './App.css'

export default function App() {
  return (
    <div className="app">
      <HomeHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/life-log" element={<LifeLog />} />
        <Route path="/pix" element={<Pix />} />
      </Routes>
    </div>
  );
}
