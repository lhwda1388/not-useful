"use client";
import React from "react";

interface CameraViewProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef?: React.RefObject<HTMLCanvasElement | null>;
  isStreaming: boolean;
  isAnalyzing: boolean;
  error: string | null;
}

export const CameraView: React.FC<CameraViewProps> = ({
  videoRef,
  canvasRef,
  isStreaming,
  isAnalyzing,
  error,
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: isStreaming ? "block" : "none",
          }}
          className="w-full h-full object-cover"
        />

        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {!isStreaming && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-sm">카메라를 시작해주세요</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-red-400">
              <div className="text-6xl mb-4">⚠️</div>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {isStreaming && isAnalyzing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <div className="animate-spin text-4xl mb-2">🔍</div>
              <p className="text-sm">얼굴을 분석하고 있습니다...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
