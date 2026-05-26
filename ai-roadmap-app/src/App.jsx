import { RoadmapProvider } from "./assets/context/roadmapcontext";
import "./App.css";

export default function App() {
  return (
    <RoadmapProvider>
      <main className="app">
        <h1>AI Roadmap App</h1>
      </main>
    </RoadmapProvider>
  );
}
