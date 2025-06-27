"use client";
import React from "react";
import { MBTIResult } from "@/entities/mbti";
import { getMBTIEmoji } from "@/entities/mbti/model/mbti-mapping";

interface ResultViewProps {
  result: MBTIResult;
}

export const ShareResultView: React.FC<ResultViewProps> = ({ result }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-center text-black">
        <div className="text-8xl mb-4">{getMBTIEmoji(result.type)}</div>
        <h2 className="text-3xl font-bold mb-2">당신은 {result.type}!</h2>
        <p className="text-lg mb-4 opacity-90">{result.description}</p>
      </div>
    </div>
  );
};
