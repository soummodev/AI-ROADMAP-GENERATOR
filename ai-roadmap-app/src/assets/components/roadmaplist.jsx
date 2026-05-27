
import {useRoadmap} from "../context/roadmapcontext.jsx"
import PhaseCard from "./phasecard.jsx";
import ProgressTracker from "./progresstracker.jsx";
import SearchBar from "./searchbar.jsx";


    function RoadmapList() {
        const {
          currentRoadmap,
          currentForm,
          searchTerm,
          clearCurrentRoadmap,
          saveRoadmap,
        } = useRoadmap();
      
        if (!currentRoadmap) return null;
        const filteredPhases = currentRoadmap.phases.filter((phase) => {
          const q = searchTerm.toLowerCase();
          if (!q) return true;
          return (
            phase.title.toLowerCase().includes(q) ||
            phase.skills.some((s) => s.toLowerCase().includes(q)) ||
            phase.projects.some((p) => p.toLowerCase().includes(q)) ||
            phase.milestones.some((m) => m.toLowerCase().includes(q))
          );
        });
    
        const filteredWeekly = currentRoadmap.weeklyPlan.filter(({ week, tasks }) => {
          const q = searchTerm.toLowerCase();
          if (!q) return true;
          return (
            week.toLowerCase().includes(q) ||
            tasks.some((t) => t.toLowerCase().includes(q))
          );
        });
      
        return (
          <div className="roadmap-list">
            <div className="roadmap-header">
              <div>
                <h2 className="roadmap-title">{currentRoadmap.title}</h2>
                <p className="roadmap-desc">{currentRoadmap.description}</p>
                {currentForm && (
                  <div className="roadmap-meta">
                    <span className="tag">{currentForm.goal}</span>
                    <span className="tag">{currentForm.level}</span>
                    <span className="tag">{currentForm.timeline}</span>
                    <span className="tag">⏰ {currentForm.hoursPerWeek}h/week</span>
                  </div>
                )}
              </div>
              <div className="roadmap-actions">
                <button
                  className="btn btn-outline"
                  onClick={() => saveRoadmap(currentRoadmap, currentForm)}
                >
                  🔖 Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={clearCurrentRoadmap}
                >
                  ✕ Clear
                </button>
              </div>
            </div>
            <ProgressTracker phases={currentRoadmap.phases} />
      
      
            <SearchBar />
      
       
            {filteredPhases.length === 0 ? (
              <p className="no-results">No phases match "{searchTerm}"</p>
            ) : (
              <div className="phases-container">
                {filteredPhases.map((phase, index) => (
                  <PhaseCard key={phase.id} phase={phase} index={index} />
                ))}
              </div>
            )}
            <div className="weekly-plan">
              <h3>📅 Weekly Study Plan</h3>
              {filteredWeekly.length === 0 ? (
                <p className="no-results">No weeks match "{searchTerm}"</p>
              ) : (
                <div className="weekly-grid">
                  {filteredWeekly.map(({ week, tasks }) => (
                    <div key={week} className="week-card">
                      <strong>{week}</strong>
                      <ul>
                        {tasks.map((task) => (
                          <li key={task}>▸ {task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }
      
      export default RoadmapList;
      

