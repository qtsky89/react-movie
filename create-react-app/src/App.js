import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}
