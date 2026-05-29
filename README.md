# 🗺️ AI Roadmap Generator (Manual Version)

> A portfolio-level React project that generates structured learning and career roadmaps — **zero API calls, 100% manual data-driven.**

🌐 **Live Demo:** 
https://ai-roadmap-generator-1jt8.vercel.app/

---

## 📌 Project Overview

This app helps developers plan their learning journey by selecting a career goal, skill level, and timeline. It instantly generates a detailed roadmap with phases, weekly plans, projects, and milestones — all powered by manually written JavaScript data, not any external API.

---

## ✨ Features

- 🎯 **11 Career Paths** — Frontend, Backend, Full Stack, AI Engineer, ML Engineer, Data Engineer, App Developer, Cybersecurity, Competitive Programming, Google Internship, Remote Job
- 📊 **Progress Tracker** — Mark phases as done, see overall completion %
- 🔍 **Search & Filter** — Live search across skills, projects, phases
- 📜 **History System** — Every generated roadmap saved to localStorage
- 🔖 **Save Roadmaps** — Bookmark roadmaps to Dashboard
- 🗑️ **Clear with Confirmation** — Safe delete with "Are you sure?" popup
- 📱 **Responsive Layout** — Works on mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI components |
| Vite | Build tool & dev server |
| React Router DOM v6 | Page routing |
| Context API | Global state management |
| localStorage | Persistent history & saved data |
| Custom Hook | `useLocalStorage.js` |
| Vanilla CSS | Minimal styling (~163 lines) |

---

## 📁 Folder Structure

```
src/
├── data/
│   └── roadmaps.js          ← All manual roadmap data
├── hooks/
│   └── useLocalStorage.js   ← Custom hook for localStorage sync
├── context/
│   └── RoadmapContext.jsx   ← Global state via Context API
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── RoadmapForm.jsx
│   ├── PhaseCard.jsx
│   ├── RoadmapList.jsx
│   ├── SearchBar.jsx
│   ├── ProgressTracker.jsx
│   ├── HistoryModal.jsx
│   └── Loading.jsx
├── pages/
│   ├── Home.jsx
│   ├── Generator.jsx
│   └── Dashboard.jsx
├── App.jsx
├── main.jsx
└── App.css
```

---

## ⚛️ React Concepts Used

- `useState` — form inputs, expand/collapse, modal toggle
- `useEffect` — localStorage sync inside custom hook
- `useContext` / Context API — global roadmap state
- `React Router` — Home / Generator / Dashboard routes
- `props` — PhaseCard, ProgressTracker, HistoryModal
- `map()` — phases, skills, projects, history list rendering
- Conditional rendering — empty states, modals, search results
- Controlled forms — select, radio, range inputs
- Custom hook — `useLocalStorage`
- localStorage — history & saved roadmaps persistence

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-roadmap-generator.git
cd ai-roadmap-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with hero section |
| Generator | `/generator` | Form + roadmap display |
| Dashboard | `/dashboard` | Saved roadmaps + history + stats |

---

## 🔑 Key Design Decisions

- **No API calls** — All data lives in `src/data/roadmaps.js`
- **Fallback system** — If exact goal+level+timeline combo doesn't exist, app finds the closest match automatically
- **Page reload behavior** — Current roadmap resets on reload (fresh feel), but history stays in localStorage
- **Component reusability** — `PhaseCard`, `ProgressTracker`, `SearchBar` are fully reusable with props

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

> Built with ❤️ using React + Vite | No external API used