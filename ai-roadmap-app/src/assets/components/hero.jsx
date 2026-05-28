
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
 
      <h1 className="hero-title">
        Build Your <span className="accent">Learning Roadmap</span>
        <br />
        in Seconds
      </h1>
      <p className="hero-sub">
        Choose your goal, skill level, and timeline.
        <br />
        Get a detailed, structured roadmap .
      </p>
      <div className="hero-stats">
        <div className="stat">
          <strong>11</strong>
          <span>Career Paths</span>
        </div>
        <div className="stat">
          <strong>3</strong>
          <span>Skill Levels</span>
        </div>
        <div className="stat">
          <strong>4</strong>
          <span>Timelines</span>
        </div>
        <div className="stat">
          <strong>100%</strong>
          <span>Offline</span>
        </div>
      </div>

      <button
        className="btn btn-primary btn-large"
        onClick={() => navigate("/generator")}
      >
        🚀 Start Generating Roadmap
      </button>
      <div className="feature-chips">
        {[
          "✅ Phase-by-Phase Plans",
          "✅ Weekly Schedule",
          "✅ Projects & Milestones",
          "✅ Progress Tracking",
          "✅ History Saved Locally",
        ].map((f) => (
          <span key={f} className="chip">
            {f}
          </span>
        ))}
      </div>
    </div>

  )
}

export default Hero
