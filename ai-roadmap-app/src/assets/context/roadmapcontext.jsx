import { useState } from "react";
import useLocalStorage from "../hooks/localstorage.js";
import { RoadmapContext } from "./roadmap-context";

function cloneRoadmap(roadmap) {
  if (!roadmap) return null;
  return structuredClone(roadmap);
}

export function RoadmapProvider({ children }) {
  const [currentRoadmap, setCurrentRoadmap] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);
  const [history, setHistory] = useLocalStorage("roadmap_history", []);
  const [savedRoadmaps, setSavedRoadmaps] = useLocalStorage("saved_roadmap", []);
  const [searchTerm, setSearchTerm] = useState("");

  function generateRoadmap(roadmap, formData) {
    const snapshot = cloneRoadmap(roadmap);
    setCurrentRoadmap(snapshot);
    setCurrentForm(formData);
    const entry = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      formData,
      roadmap: snapshot,
    };
    setHistory((prev) => [entry, ...prev]);
  }

  function clearCurrentRoadmap() {
    setCurrentRoadmap(null);
    setCurrentForm(null);
  }

  function clearHistory() {
    setHistory([]);
  }

  function loadFromHistory(id) {
    const entry = history.find((h) => h.id === id);
    if (!entry) return;
    setCurrentRoadmap(cloneRoadmap(entry.roadmap));
    setCurrentForm(entry.formData);
  }

  function saveRoadmap(roadmap, formData) {
    const snapshot = cloneRoadmap(roadmap);
    const entry = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      formData,
      roadmap: snapshot,
    };
    setSavedRoadmaps((prev) => [entry, ...prev]);
  }

  function removeSaved(id) {
    setSavedRoadmaps((prev) => prev.filter((r) => r.id !== id));
  }

  function togglePhaseComplete(phaseId) {
    if (!currentRoadmap) return;
    setCurrentRoadmap((prev) => ({
      ...prev,
      phases: prev.phases.map((p) =>
        p.id === phaseId ? { ...p, completed: !p.completed } : p
      ),
    }));
  }

  return (
    <RoadmapContext.Provider
      value={{
        currentRoadmap,
        currentForm,
        history,
        savedRoadmaps,
        searchTerm,
        setSearchTerm,
        generateRoadmap,
        clearCurrentRoadmap,
        clearHistory,
        loadFromHistory,
        saveRoadmap,
        removeSaved,
        togglePhaseComplete,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
}
