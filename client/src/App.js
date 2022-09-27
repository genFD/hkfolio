import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Project, Projects } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
