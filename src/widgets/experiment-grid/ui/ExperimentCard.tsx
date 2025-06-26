"use client";

import Link from "next/link";
import { Experiment } from "@/entities/experiment";

interface ExperimentCardProps {
  experiment: Experiment;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getDifficultyText = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      return "쉬움";
    case "medium":
      return "보통";
    case "hard":
      return "어려움";
    default:
      return "알 수 없음";
  }
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
        !experiment.isAvailable
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {experiment.title}
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              experiment.difficulty
            )}`}
          >
            {getDifficultyText(experiment.difficulty)}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {experiment.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {experiment.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{experiment.category}</span>

          {experiment.isAvailable ? (
            <Link
              href={experiment.path}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              체험하기
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <span className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-600 text-sm font-medium rounded-md cursor-not-allowed">
              준비 중
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
