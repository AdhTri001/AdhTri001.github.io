import NavBar from "./components/NavBar"

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Content from "./pages/Content";
import Hobbies from "./pages/Hobbies";

import { Route, Routes } from "react-router-dom";

const title = "Adheesh Trivedi";
const pages = ["Projects", "Content", "Hobbies"];


/**
 * A NavBar component at the top of the page
 * and adds the pages
 * @returns Main application component
 */
function App() {

  return (
    <>
      <NavBar title={title} pages={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/content" element={<Content />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </>
  )
}

export default App
