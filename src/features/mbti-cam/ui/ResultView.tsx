"use client";
import React from "react";
import { MBTIResult } from "@/entities/mbti";
import { getMBTIEmoji } from "@/entities/mbti/model/mbti-mapping";

interface ResultViewProps {
  result: MBTIResult;
  onReset: () => void;
  onShare: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onReset,
  onShare,
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-center text-black">
        <div className="text-8xl mb-4">{getMBTIEmoji(result.type)}</div>
        <h2 className="text-3xl font-bold mb-2">당신은 {result.type}!</h2>
        <p className="text-lg mb-4 opacity-90">{result.description}</p>
        <p className="text-sm mb-6 opacity-75">
          정확도: {Math.round(result.confidence * 100)}%
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onReset}
            className="px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 font-medium"
          >
            다시하기
          </button>
          <button
            onClick={onShare}
            className="px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 font-medium"
          >
            공유하기
          </button>
        </div>
      </div>
    </div>
  );
};
