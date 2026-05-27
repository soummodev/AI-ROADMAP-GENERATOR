import { Link, useLocation } from "react-router-dom";
import { useRoadmap } from "../context/roadmapcontext.jsx";
function Navbar() {
  const location = useLocation();
  const { history } = useRoadmap();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
  
      <Link to="/" className="nav-brand">
        🗺️ <span>AI Roadmap</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link
          to="/generator"
          className={isActive("/generator") ? "nav-link active" : "nav-link"}
        >
          Generator
        </Link>
        <Link
          to="/dashboard"
          className={isActive("/dashboard") ? "nav-link active" : "nav-link"}
        >
          Dashboard
          {history.length > 0 && (
            <span className="badge">{history.length}</span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar