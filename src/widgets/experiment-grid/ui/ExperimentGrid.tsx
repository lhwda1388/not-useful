"use client";

import { experiments } from "@/entities/experiment/model/mock-data";
import { ExperimentCard } from "./ExperimentCard";

export function ExperimentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiments.map((experiment) => (
        <ExperimentCard key={experiment.id} experiment={experiment} />
      ))}
    </div>
  );
}
