import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import BioPage from "./components/BioPage";
import SingleProjectPage from "./components/SingleProjectPage"; // <-- import this

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/projects/:id" element={<SingleProjectPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
