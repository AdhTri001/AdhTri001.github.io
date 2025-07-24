import NavBar from "./components/NavBar"

import Home from "./pages/Home";
import Works from "./pages/Works";
import Content from "./pages/Content";
import Hobbies from "./pages/Hobbies";

import { Route, Routes } from "react-router-dom";


const pages = ["Works", "Content", "Hobbies"];

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
        <Route path="/works" element={<Works />} />
        <Route path="/content" element={<Content />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </>
  )
}

export default App
