import { useState } from "react";
import { useRoadmap } from "../context/roadmapcontext.jsx";

function HistoryModal({ onClose }) {
  const { history, loadFromHistory, clearHistory } = useRoadmap();

  const [confirmClear, setConfirmClear] = useState(false);

  function handleClear() {
    clearHistory();
    setConfirmClear(false);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>📜 Roadmap History</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {history.length === 0 ? (
          <p className="empty-state">No history yet. Generate a roadmap first!</p>
        ) : (
          <>

            <ul className="history-list">
              {history.map((entry) => (
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
                      onClose();
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
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={() => setConfirmClear(true)}
              >
                🗑 Clear All History
              </button>
            ) : (
              <div className="confirm-box">
                <p>Are you sure you want to clear history?</p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-danger" onClick={handleClear}>
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
    </div>
  );
}

export default HistoryModal;
