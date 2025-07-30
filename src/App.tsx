import NavBar from "./components/NavBar"

import ParticleBackground from "./components/ParticleBackground"

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";

import { Route, Routes } from "react-router-dom";


const pages = ["Projects", "Experience"];

/**
 * A NavBar component at the top of the page
 * and adds the pages
 * @returns Main application component
 */
function App() {

  return (
    <>
      <ParticleBackground />
      <NavBar pages={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}

export default App
