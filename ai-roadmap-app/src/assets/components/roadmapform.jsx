// ============================================================
// RoadmapForm.jsx — Controlled form to pick roadmap options
// Uses: useState (controlled inputs), props, getRoadmap()
// ============================================================

import { useState } from "react";
import { CAREER_GOALS, SKILL_LEVELS, TIMELINES, getRoadmap } from "../data/data.js";
import { useRoadmap } from "../context/roadmapcontext.jsx";

function RoadmapForm() {
  const { generateRoadmap } = useRoadmap();

  // ─── Controlled form state ────────────
  const [form, setForm] = useState({
    goal: "",
    level: "",
    timeline: "",
    hoursPerWeek: "10",
  });

  const [error, setError] = useState("");

  // ─── Handle any input change ──────────
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input
  }

  // ─── Form submission ──────────────────
  function handleSubmit(e) {
    e.preventDefault();

    // Validate: all fields required
    if (!form.goal || !form.level || !form.timeline) {
      setError("⚠️ Please fill in all fields before generating.");
      return;
    }

    // Lookup roadmap from manual data
    const roadmap = getRoadmap(form.goal, form.level, form.timeline);

    // Push to context (saves to history + sets current)
    generateRoadmap(roadmap, form);
  }

  return (
    <form className="roadmap-form" onSubmit={handleSubmit}>
      <h2 className="form-title">🎯 Configure Your Roadmap</h2>

      {/* Error message */}
      {error && <p className="error-msg">{error}</p>}

      {/* ── Career Goal ────────────────── */}
      <div className="form-group">
        <label htmlFor="goal">Career Goal</label>
        <select
          id="goal"
          name="goal"
          value={form.goal}
          onChange={handleChange}
        >
          <option value="">— Select a goal —</option>
          {CAREER_GOALS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* ── Skill Level ────────────────── */}
      <div className="form-group">
        <label>Skill Level</label>
        <div className="radio-group">
          {SKILL_LEVELS.map((lvl) => (
            <label key={lvl} className="radio-label">
              <input
                type="radio"
                name="level"
                value={lvl}
                checked={form.level === lvl}
                onChange={handleChange}
              />
              {lvl}
            </label>
          ))}
        </div>
      </div>

      {/* ── Timeline ───────────────────── */}
      <div className="form-group">
        <label>Timeline</label>
        <div className="radio-group">
          {TIMELINES.map((t) => (
            <label key={t} className="radio-label">
              <input
                type="radio"
                name="timeline"
                value={t}
                checked={form.timeline === t}
                onChange={handleChange}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* ── Hours per week ─────────────── */}
      <div className="form-group">
        <label htmlFor="hoursPerWeek">
          Study Hours / Week: <strong>{form.hoursPerWeek}h</strong>
        </label>
        <input
          type="range"
          id="hoursPerWeek"
          name="hoursPerWeek"
          min="5"
          max="60"
          step="5"
          value={form.hoursPerWeek}
          onChange={handleChange}
        />
        <div className="range-labels">
          <span>5h</span>
          <span>60h</span>
        </div>
      </div>

      {/* ── Submit ─────────────────────── */}
      <button type="submit" className="btn btn-primary">
        ⚡ Generate My Roadmap
      </button>
    </form>
  );
}

export default RoadmapForm;
