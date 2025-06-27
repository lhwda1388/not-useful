export interface EmotionResult {
  emotion: Emotion;
  confidence: number;
}

export interface MBTIResult {
  type: string;
  description: string;
  confidence: number;
}

export interface EmotionAnalysis {
  emotion: string;
  confidence: number;
}

export type Emotion =
  | "happy"
  | "neutral"
  | "surprised"
  | "angry"
  | "sad"
  | "fearful"
  | "disgusted";

export type MBTIType =
  | "ENFP"
  | "INTP"
  | "ENTP"
  | "ISTJ"
  | "ISFJ"
  | "ENFJ"
  | "INTJ"
  | "ESTP"
  | "ESFP"
  | "INFJ"
  | "ENTJ"
  | "ISFP"
  | "ESTJ"
  | "ESFJ"
  | "INFP"
  | "ISTP";

// 실제 BlazeFace 키포인트 형식: [x, y] 배열
export type FaceLandmarks = [number, number];

export interface CameraState {
  isStreaming: boolean;
  error: string | null;
  isAnalyzing: boolean;
}

export interface AnalysisState {
  isComplete: boolean;
  emotion: EmotionResult | null;
  mbtiResult: MBTIResult | null;
}

// face-api.js의 7가지 감정 타입
export type FaceEmotion =
  | "neutral"
  | "happy"
  | "sad"
  | "angry"
  | "fearful"
  | "disgusted"
  | "surprised";
