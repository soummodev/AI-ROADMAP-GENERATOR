import { useState } from "react";
import { useRoadmap } from "../context/roadmapcontext.jsx";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/searchbar.jsx";

function Dashboard() {
  const {
    savedRoadmaps,
    history,
    removeSaved,
    loadFromHistory,
    clearHistory,
    searchTerm,
  } = useRoadmap();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("saved"); // "saved" | "history"
  const [confirmClear, setConfirmClear] = useState(false);

  const filteredSaved = savedRoadmaps.filter((entry) => {
    const q = searchTerm.toLowerCase();
    if (!q) return true;
    return (
      entry.formData.goal.toLowerCase().includes(q) ||
      entry.formData.level.toLowerCase().includes(q) ||
      entry.roadmap.title.toLowerCase().includes(q)
    )
  })
  const filteredHistory = history.filter((entry) => {
    const q = searchTerm.toLowerCase();
    if (!q) return true;
    return (
      entry.formData.goal.toLowerCase().includes(q) ||
      entry.formData.level.toLowerCase().includes(q)
    )
  })

  const totalPhases = savedRoadmaps.reduce(
    (sum, e) => sum + e.roadmap.phases.length, 0
  );
  const completedPhases = savedRoadmaps.reduce(
    (sum, e) => sum + e.roadmap.phases.filter((p) => p.completed).length, 0
  );

  return (
    <div className="page">
      <h1 className="page-heading">📊 Dashboard</h1>
      <div className="stats-row">
        <div className="stat-card">
          <strong>{savedRoadmaps.length}</strong>
          <span>Saved Roadmaps</span>
        </div>
        <div className="stat-card">
          <strong>{history.length}</strong>
          <span>Generated Total</span>
        </div>
        <div className="stat-card">
          <strong>{totalPhases === 0 ? "—" : `${completedPhases}/${totalPhases}`}</strong>
          <span>Phases Done</span>
        </div>
        <div className="stat-card">
          <strong>
            {totalPhases === 0
              ? "0%"
              : Math.round((completedPhases / totalPhases) * 100) + "%"}
          </strong>
          <span>Overall Progress</span>
        </div>
      </div>
      <SearchBar placeholder="Search saved roadmaps or history..." />

      <div className="tabs">
        <button
          className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("saved")}
        >
          🔖 Saved ({savedRoadmaps.length})
        </button>
        <button
          className={`tab ${activeTab === "history" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          📜 History ({history.length})
        </button>
      </div>

      {activeTab === "saved" && (
        <div className="tab-content">
          {filteredSaved.length === 0 ? (
            <div className="empty-state">
              <p>No saved roadmaps yet.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/generator")}
              >
                Generate & Save One
              </button>
            </div>
          ) : (
            <div className="card-grid">
              {filteredSaved.map((entry) => (
                <div key={entry.id} className="saved-card">
                  <h4>{entry.formData.goal}</h4>
                  <div className="roadmap-meta">
                    <span className="tag">{entry.formData.level}</span>
                    <span className="tag">{entry.formData.timeline}</span>
                  </div>
                  <p className="saved-date">Saved: {entry.timestamp}</p>

                  {/* Completion bar */}
                  <div className="mini-progress-track">
                    <div
                      className="mini-progress-fill"
                      style={{
                        width: `${
                          entry.roadmap.phases.length === 0
                            ? 0
                            : Math.round(
                                (entry.roadmap.phases.filter((p) => p.completed)
                                  .length /
                                  entry.roadmap.phases.length) *
                                  100
                              )
                        }%`,
                      }}
                    />
                  </div>

                  <div className="saved-actions">
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => {
                        loadFromHistory(entry);
                        navigate("/generator");
                      }}
                    >
                      ↩ Open
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeSaved(entry.id)}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "history" && (
        <div className="tab-content">
          {filteredHistory.length === 0 ? (
            <div className="empty-state">
              <p>No history yet.</p>
            </div>
          ) : (
            <>
              <ul className="history-list">
                {filteredHistory.map((entry) => (
                  <li key={entry.id} className="history-item">
                    <div className="history-info">
                      <strong>{entry.formData.goal}</strong>
                      <span>
                        {entry.formData.level} · {entry.formData.timeline}
                      </span>
                      <small>{entry.timestamp}</small>
                    </div>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => {
                        loadFromHistory(entry);
                        navigate("/generator");
                      }}
                    >
                      ↩ Open
                    </button>
                  </li>
                ))}
              </ul>


              {!confirmClear ? (
                <button
                  className="btn btn-danger"
                  style={{ marginTop: "1rem" }}
                  onClick={() => setConfirmClear(true)}
                >
                  🗑 Clear All History
                </button>
              ) : (
                <div className="confirm-box">
                  <p>Are you sure you want to clear history?</p>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        clearHistory();
                        setConfirmClear(false);
                      }}
                    >
                      Yes, Clear
                    </button>
                    <button
                      className="btn btn-outline"
                      onClick={() => setConfirmClear(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;