import { MBTIResult } from "./types";

const emotionToMBTIMapping: Record<string, MBTIResult[]> = {
  // face-api.js의 7가지 감정
  neutral: [
    {
      type: "ISTJ",
      description:
        "실용적이고 사실에 근거한 검사관! 당신은 책임감이 강하며 질서와 규칙을 중요시합니다.",
      confidence: 0.6,
    },
    {
      type: "ISFJ",
      description:
        "전념하고 따뜻한 수호자! 당신은 안정감을 중요시하며 다른 사람들을 돌보는 것을 좋아합니다.",
      confidence: 0.5,
    },
  ],
  happy: [
    {
      type: "ENFP",
      description:
        "열정적이고 창의적인 자유로운 영혼! 당신은 새로운 아이디어를 사랑하고 사람들과의 연결을 중요시합니다.",
      confidence: 0.8,
    },
    {
      type: "ESFP",
      description:
        "즐거움을 나누는 사교적인 엔터테이너! 당신은 현재를 즐기며 다른 사람들을 웃게 만드는 재능이 있습니다.",
      confidence: 0.7,
    },
  ],
  sad: [
    {
      type: "INFP",
      description:
        "깊은 감성을 가진 이상주의자! 당신은 내면의 가치관을 중요시하며 창의적인 표현을 통해 자신을 드러냅니다.",
      confidence: 0.8,
    },
    {
      type: "ISFP",
      description:
        "조용하지만 따뜻한 예술가! 당신은 아름다움을 추구하며 자신만의 방식으로 세상을 바라봅니다.",
      confidence: 0.7,
    },
  ],
  angry: [
    {
      type: "ENTJ",
      description:
        "대담하고 상상력이 풍부한 지도자! 당신은 강한 의지와 결단력을 가지고 목표를 달성합니다.",
      confidence: 0.8,
    },
    {
      type: "ESTJ",
      description:
        "실용적이고 사실에 근거한 관리자! 당신은 질서와 규칙을 중요시하며 효율적으로 일을 처리합니다.",
      confidence: 0.7,
    },
  ],
  fearful: [
    {
      type: "INFJ",
      description:
        "조용하고 신비로운 이상주의자! 당신은 깊은 통찰력을 가지고 있으며 다른 사람들을 돕는 것을 좋아합니다.",
      confidence: 0.8,
    },
    {
      type: "ISFJ",
      description:
        "전념하고 따뜻한 수호자! 당신은 안정감을 중요시하며 다른 사람들을 돌보는 것을 좋아합니다.",
      confidence: 0.7,
    },
  ],
  disgusted: [
    {
      type: "INTJ",
      description:
        "상상력이 풍부하고 전략적인 사상가! 당신은 모든 일에 계획을 세우며 지적 도전을 추구합니다.",
      confidence: 0.8,
    },
    {
      type: "ISTJ",
      description:
        "실용적이고 사실에 근거한 검사관! 당신은 책임감이 강하며 질서와 규칙을 중요시합니다.",
      confidence: 0.7,
    },
  ],
  surprised: [
    {
      type: "ENFP",
      description:
        "열정적이고 창의적인 자유로운 영혼! 당신은 새로운 경험을 추구하며 호기심이 많습니다.",
      confidence: 0.8,
    },
    {
      type: "ENTP",
      description:
        "대담하고 독창적인 사상가! 당신은 지적 도전을 즐기며 새로운 아이디어를 탐구합니다.",
      confidence: 0.7,
    },
  ],
};

// MBTI 타입별 이모지 매핑
export const getMBTIEmoji = (type: string) => {
  const emojiMap: Record<string, string> = {
    ENFP: "🌟",
    ENFJ: "💫",
    ENTP: "💡",
    ENTJ: "👑",
    ESFP: "🎉",
    ESFJ: "🤗",
    ESTP: "🏃‍♂️",
    ESTJ: "📋",
    INFP: "🌸",
    INFJ: "🌙",
    INTP: "🧠",
    INTJ: "🔮",
    ISFP: "🎨",
    ISFJ: "🛡️",
    ISTP: "🔧",
    ISTJ: "⚖️",
  };
  return emojiMap[type] || "🤔";
};

// MBTI 타입별 설명
export const getMBTIDescription = (type: string): string => {
  const descriptions: Record<string, string> = {
    ISTJ: "신중하고 책임감 있는 현실주의자",
    ISFJ: "따뜻하고 헌신적인 보호자",
    INFJ: "이상주의적이고 통찰력 있는 조언자",
    ENFP: "열정적이고 창의적인 활동가",
    ENTP: "논리적이고 혁신적인 사상가",
    ESFP: "즉흥적이고 친근한 연예인",
    INTP: "논리적이고 분석적인 학자",
    INTJ: "전략적이고 독창적인 설계자",
    ISTP: "실용적이고 유연한 만능재주꾼",
    ENFJ: "카리스마 있고 이타적인 지도자",
    ENTJ: "대담하고 상상력 풍부한 통솔자",
    ESFJ: "사교적이고 동정심 많은 외교관",
    INFP: "이상주의적이고 창의적인 중재자",
    ISFP: "예술적이고 모험적인 모험가",
    ESTJ: "엄격하고 체계적인 경영자",
  };
  return descriptions[type] || "신중하고 현실적인 성격";
};

// 감정을 MBTI로 매핑
export const mapEmotionToMBTI = (
  emotion: string,
  confidence: number
): MBTIResult => {
  const possibleResults =
    emotionToMBTIMapping[emotion] || emotionToMBTIMapping.neutral;

  // 신뢰도에 따라 결과 선택
  const selectedResult =
    confidence > 0.7
      ? possibleResults[0]
      : possibleResults[1] || possibleResults[0];

  // 신뢰도 조정
  const adjustedConfidence = Math.min(
    selectedResult.confidence * confidence,
    1.0
  );

  return {
    ...selectedResult,
    confidence: adjustedConfidence,
  };
};
