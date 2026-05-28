import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoadmapProvider } from "./assets/context/roadmapcontext.jsx";
import Navbar from "./assets/components/navber.jsx";
import Home from "./assets/pages/home.jsx";
import Generator from "./assets/pages/generator.jsx";
import Dashboard from "./assets/pages/dashboard.jsx";
import "./App.css";

function App() {
  return (
    <RoadmapProvider>
      <BrowserRouter>

        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="page" style={{ textAlign: "center", paddingTop: "4rem" }}>
                  <h2>404 — Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </RoadmapProvider>
  );
}

export default App;
