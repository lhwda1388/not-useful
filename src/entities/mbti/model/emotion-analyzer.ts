import { EmotionAnalysis } from "./types";

export class EmotionAnalyzer {
  /**
   * face-api.js의 내장 감정 분석 결과를 직접 사용합니다.
   */
  static analyzeEmotion(expressions: Record<string, number>): EmotionAnalysis {
    console.log("=== face-api.js 내장 감정 분석 ===");
    console.log("표정 분석 결과:", expressions);

    // 가장 높은 확률의 감정 찾기
    let maxEmotion = "neutral";
    let maxProbability = 0;

    Object.entries(expressions).forEach(([emotion, probability]) => {
      if (probability > maxProbability) {
        maxProbability = probability;
        maxEmotion = emotion;
      }
    });

    // 신뢰도 계산 (확률이 높을수록 신뢰도 높음)
    const confidence = Math.min(maxProbability * 1.2, 1.0);

    console.log("감정:", maxEmotion);
    console.log("확률:", maxProbability);
    console.log("신뢰도:", confidence);
    console.log("========================");

    return {
      emotion: maxEmotion,
      confidence: confidence,
    };
  }
}
