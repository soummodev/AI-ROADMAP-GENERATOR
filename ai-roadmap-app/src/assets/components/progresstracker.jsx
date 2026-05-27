function ProgressTracker({ phases }) {
    const total = phases.length;
    const done = phases.filter((p) => p.completed).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    const label =
      percent === 0
        ? "Just getting started 🌱"
        : percent < 50
        ? "Making progress 📈"
        : percent < 100
        ? "Halfway there! 🔥"
        : "Roadmap Complete! 🎉";
  
    return (
      <div className="progress-tracker">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-pct">{percent}%</span>
        </div>
  
        {/* Progress bar track */}
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="progress-status">{label}</p>
        <div className="phase-dots">
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className={`phase-dot ${phase.completed ? "dot-done" : ""}`}
              title={phase.title}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProgressTracker;
  