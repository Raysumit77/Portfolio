import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
