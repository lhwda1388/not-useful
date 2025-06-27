import { Metadata } from "next";
import { MBTICam } from "@/features/mbti-cam";

export const metadata: Metadata = {
  title: "MBTI Cam - Oops Box",
  description:
    "당신의 표정으로 MBTI를 맞춰보세요! 재미있는 얼굴 인식 기반 MBTI 테스트",
  keywords: ["MBTI", "얼굴인식", "AI", "성격테스트", "웹캠"],
  openGraph: {
    title: "MBTI Cam - Oops Box",
    description: "당신의 표정으로 MBTI를 맞춰보세요!",
    type: "website",
  },
};

export default function MBTIPage() {
  return <MBTICam />;
}
