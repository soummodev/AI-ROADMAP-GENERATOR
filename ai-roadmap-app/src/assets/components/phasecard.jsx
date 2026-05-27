

import { useState } from "react";
import { useRoadmap } from "../context/roadmapcontext.jsx";

function PhaseCard({ phase, index }) {
  const { togglePhaseComplete } = useRoadmap();

 
  const [expanded, setExpanded] = useState(index === 0); 

  return (
    <div className={`phase-card ${phase.completed ? "phase-done" : ""}`}>
    
      <div
        className="phase-header"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="phase-header-left">
          <span className="phase-num">Phase {index + 1}</span>
          <div>
            <h3 className="phase-title">{phase.title}</h3>
            <span className="phase-duration">⏱ {phase.duration}</span>
          </div>
        </div>

        <div className="phase-header-right">
          <button
            className={`complete-btn ${phase.completed ? "done" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // Don't trigger expand
              togglePhaseComplete(phase.id);
            }}
          >
            {phase.completed ? "✅ Done" : "○ Mark Done"}
          </button>

          <span className="expand-icon">{expanded ? "▲" : "▼"}</span>
        </div>
      </div>
      {expanded && (
        <div className="phase-body">
    
          <div className="phase-section">
            <h4>🛠 Skills to Learn</h4>
            <ul className="checklist">
              {phase.skills.map((skill) => (
                <li key={skill} className="checklist-item">
                  <span className="check-dot">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="phase-section">
            <h4>🏗 Projects to Build</h4>
            <ul className="checklist">
              {phase.projects.map((proj) => (
                <li key={proj} className="checklist-item project-item">
                  📦 {proj}
                </li>
              ))}
            </ul>
          </div>

          <div className="phase-section">
            <h4>🎯 Milestones</h4>
            <ul className="checklist">
              {phase.milestones.map((ms) => (
                <li key={ms} className="checklist-item milestone-item">
                  🏆 {ms}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhaseCard;
