import { useContext } from "react";
import { RoadmapContext } from "../context/roadmap-context";

export function useRoadmap() {
  const ctx = useContext(RoadmapContext);
  if (!ctx) throw new Error("useRoadmap must be used inside RoadmapProvider");
  return ctx;
}
