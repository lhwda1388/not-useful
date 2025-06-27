import React from "react";
import { MBTICam } from "@/features/mbti-cam/ui/MBTICam";

export default async function SharePage({
  searchParams,
}: {
  searchParams: Promise<{ mbtiType: string }>;
}) {
  const params = await searchParams;
  return <MBTICam mbtiType={params.mbtiType} />;
}
