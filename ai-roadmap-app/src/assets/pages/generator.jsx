import { useState } from "react";
import RoadmapForm from "../components/roadmapform.jsx";
import RoadmapList from "../components/roadmaplist.jsx";
import HistoryModal from "../components/historymodal.jsx";
import { useRoadmap } from "../context/roadmapcontext.jsx";

function Generator() {
  const { currentRoadmap, history } = useRoadmap();

  // Controls whether the history modal is open
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="page generator-page">
      {/* ── Page top bar ────────────────── */}
      <div className="generator-topbar">
        <h1 className="page-heading">🗺️ Roadmap Generator</h1>
        <button
          className="btn btn-outline"
          onClick={() => setShowHistory(true)}
        >
          📜 History ({history.length})
        </button>
      </div>

      {/* ── Two-column layout on wide screens ── */}
      <div className="generator-layout">
        {/* Left: Form */}
        <aside className="generator-sidebar">
          <RoadmapForm />
        </aside>

        {/* Right: Generated roadmap OR placeholder */}
        <main className="generator-main">
          {currentRoadmap ? (
            <RoadmapList />
          ) : (
            <div className="empty-roadmap">
              <p className="empty-icon">🗺️</p>
              <h3>No roadmap generated yet</h3>
              <p>Fill in the form on the left and click "Generate My Roadmap".</p>
            </div>
          )}
        </main>
      </div>

      {/* ── History Modal ─────────────────── */}
      {showHistory && (
        <HistoryModal onClose={() => setShowHistory(false)} />
      )}
    </div>
  );
}

export default Generator;