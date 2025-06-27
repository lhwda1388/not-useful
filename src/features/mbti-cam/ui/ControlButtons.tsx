"use client";
import React from "react";

interface ControlButtonsProps {
  isStreaming: boolean;
  isAnalyzing: boolean;
  onStartCamera: () => void;
  onStopCamera: () => void;
  onStartAnalysis: () => void;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  isStreaming,
  isAnalyzing,
  onStartCamera,
  onStopCamera,
  onStartAnalysis,
}) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {!isStreaming ? (
        <button
          onClick={onStartCamera}
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
        >
          카메라 시작
        </button>
      ) : (
        <>
          <button
            onClick={onStartAnalysis}
            disabled={isAnalyzing}
            className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
          >
            {isAnalyzing ? "분석 중..." : "측정 시작"}
          </button>
          <button
            onClick={onStopCamera}
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
          >
            카메라 중지
          </button>
        </>
      )}
    </div>
  );
};
