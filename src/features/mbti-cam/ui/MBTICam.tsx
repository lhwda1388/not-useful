"use client";
import React from "react";
import { useMBTICamera } from "../model/use-mbti-camera";
import { CameraView } from "./CameraView";
import { ControlButtons } from "./ControlButtons";
import { ResultView } from "./ResultView";
import { ShareResultView } from "./ShareResultView";

export const MBTICam: React.FC<{ mbtiType?: string }> = ({ mbtiType }) => {
  const {
    videoRef,
    canvasRef,
    cameraState,
    mbtiResult,
    startCamera,
    stopCamera,
    startAnalysis,
    shareResult,
    resetAnalysis,
  } = useMBTICamera({ mbtiType });

  if (mbtiType && !mbtiResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center text-2xl font-bold text-gray-800">
            {mbtiType} 결과를 불러오는 중입니다...
          </div>
        </div>
      </div>
    );
  }

  if (mbtiType && mbtiResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ShareResultView result={mbtiResult} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">MBTI Cam</h1>
          <p className="text-lg text-gray-600">
            당신의 표정으로 MBTI를 맞춰볼까요?
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="space-y-8">
          {/* 결과가 있는 경우 결과 화면 표시 */}
          {mbtiResult && (
            <ResultView
              result={mbtiResult}
              onReset={resetAnalysis}
              onShare={shareResult}
            />
          )}
          {!mbtiResult && (
            <>
              {/* 카메라 뷰 */}
              <CameraView
                videoRef={videoRef}
                canvasRef={canvasRef}
                isStreaming={cameraState.isStreaming}
                isAnalyzing={cameraState.isAnalyzing}
                error={cameraState.error}
              />
              {/* 제어 버튼 */}
              <ControlButtons
                isStreaming={cameraState.isStreaming}
                isAnalyzing={cameraState.isAnalyzing}
                onStartCamera={startCamera}
                onStopCamera={stopCamera}
                onStartAnalysis={startAnalysis}
              />
            </>
          )}
        </div>

        {/* 안내 메시지 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>💡 카메라 권한을 허용하고 얼굴을 화면에 맞춰주세요</p>
          <p>🎭 다양한 표정으로 재미있는 결과를 확인해보세요!</p>
        </div>
      </div>
    </div>
  );
};
