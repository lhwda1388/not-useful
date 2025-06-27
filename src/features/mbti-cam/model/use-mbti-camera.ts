"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import * as faceapi from "face-api.js";
import { CameraState, MBTIResult } from "@/entities/mbti";
import { getMBTIDescription, mapEmotionToMBTI } from "@/entities/mbti";
import { EmotionAnalyzer } from "@/entities/mbti/model/emotion-analyzer";

export const useMBTICamera = ({ mbtiType }: { mbtiType?: string }) => {
  const [cameraState, setCameraState] = useState<CameraState>({
    isStreaming: false,
    error: null,
    isAnalyzing: false,
  });
  const [mbtiResult, setMbtiResult] = useState<MBTIResult | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);

  // face-api.js 모델 로드
  const loadModels = useCallback(async () => {
    try {
      console.log("face-api.js 모델 로딩 시작...");
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("face-api.js 모델 로딩 완료!");
    } catch (error) {
      console.error("모델 로딩 실패:", error);
      setCameraState((prev) => ({
        ...prev,
        error: "모델 로딩에 실패했습니다.",
      }));
    }
  }, []);

  // 카메라 시작
  const startCamera = useCallback(async () => {
    try {
      setCameraState((prev) => ({ ...prev, error: null, isStreaming: true }));

      // 모델 로드
      await loadModels();

      // 카메라 스트림 가져오기
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "user",
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.style.display = "block";

        // 비디오 로드 완료 후 분석 시작
        videoRef.current.onloadedmetadata = () => {};
      }
    } catch (error) {
      console.error("카메라 시작 실패:", error);
      setCameraState((prev) => ({
        ...prev,
        error: "카메라를 시작할 수 없습니다. 권한을 확인해주세요.",
        isStreaming: false,
      }));
    }
  }, [loadModels]);

  // 카메라 중지
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.style.display = "none";
      videoRef.current.srcObject = null;
    }

    setCameraState((prev) => ({
      ...prev,
      isStreaming: false,
      isAnalyzing: false,
    }));
    setMbtiResult(null);
  }, []);

  // 감정 분석 시작
  const startAnalysis = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    setCameraState((prev) => ({ ...prev, isAnalyzing: true }));

    const analyzeFrame = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      try {
        // face-api.js로 얼굴 감지 및 감정 분석
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        if (detections.length > 0) {
          const face = detections[0];
          const expressions = face.expressions as unknown as Record<
            string,
            number
          >;

          // 감정 분석
          const emotionAnalysis = EmotionAnalyzer.analyzeEmotion(expressions);
          const result = mapEmotionToMBTI(
            emotionAnalysis.emotion,
            emotionAnalysis.confidence
          );

          console.log("MBTI 결과:", result);
          setMbtiResult(result);
        } else {
          setMbtiResult(null);
        }
      } catch (error) {
        console.error("감정 분석 오류:", error);
      }

      // 다음 프레임 분석 예약
      animationRef.current = requestAnimationFrame(analyzeFrame);
    };

    analyzeFrame();
  }, []);

  const shareResult = useCallback(() => {
    if (!mbtiResult) return;
    navigator.clipboard.writeText(
      window.location.href + `/share?mbtiType=${mbtiResult.type}`
    );
    alert("공유 링크가 복사되었습니다.");
  }, [mbtiResult]);

  const resetAnalysis = useCallback(() => {
    setMbtiResult(null);
    startCamera();
    setCameraState((prev) => ({ ...prev, isAnalyzing: false }));
  }, [startCamera]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    if (mbtiType) {
      setMbtiResult({
        type: mbtiType,
        description: getMBTIDescription(mbtiType),
        confidence: 1,
      });
    }
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return {
    cameraState,
    mbtiResult,
    videoRef,
    canvasRef,
    startCamera,
    stopCamera,
    startAnalysis,
    shareResult,
    resetAnalysis,
  };
};
