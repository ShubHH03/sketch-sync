import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Whiteboard from "./pages/WhiteBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:roomId" element={<Whiteboard />} />
      </Routes>
    </Router>
  );
}

export default App;
