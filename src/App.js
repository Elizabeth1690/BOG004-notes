import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";
import Notes from "./components/Notes.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
