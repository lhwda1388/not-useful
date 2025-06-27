import React from "react";
import { MBTICam } from "@/features/mbti-cam/ui/MBTICam";

export default async function SharePage({
  searchParams,
}: {
  searchParams: { mbtiType: string };
}) {
  return <MBTICam mbtiType={await searchParams.mbtiType} />;
}
