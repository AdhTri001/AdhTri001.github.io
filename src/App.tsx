import NavBar from "./components/NavBar"

import Home from "./Home/Home";
import Experience from "./Experience/Experience";

import { Route, Routes } from "react-router-dom";


const pages = ["Experience"];

/**
 * A NavBar component at the top of the page
 * and adds the pages
 * @returns Main application component
 */
function App() {

  return (
    <>
      <NavBar pages={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}

export default App
