"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FaTriangleExclamation,
  FaVolumeHigh,
  FaVolumeOff,
  FaPlay,
  FaPause,
  FaRotateRight,
} from "react-icons/fa6";

const VideoContainer = ({
  videoUrl,
  width,
  height,
  customClassName,
  customVideoClassName,
  buttonsPostion,
  displayButtons,
  isLooped,
  isAutoplayed,
}: {
  videoUrl: string;
  customClassName?: string;
  customVideoClassName?: string;
  buttonsPostion?: string;
  displayButtons?: boolean;
  width?: number;
  height?: number;
  isLooped?: boolean;
  isAutoplayed?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(videoRef, { amount: 0.3 });
  const [timeInView, setTimeInView] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean | null>(true);

  useEffect(() => {
    if (isInView && timeInView == 0 && isLooped != true) {
      setIsMuted(false);
      handleRestart();
      setTimeInView(timeInView + 1);
    } else if (!isInView) {
      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={cn(customClassName)}>
      <video
        onClick={() => handlePlayPause()}
        key={videoUrl}
        ref={videoRef}
        className={cn(customVideoClassName)}
        width={width}
        height={height}
        onEnded={() => setIsPlaying(null)}
        playsInline
        preload="none"
        loop={isLooped ?? true}
        muted={isMuted}
        autoPlay={isAutoplayed ?? true}
      >
        <source src={videoUrl} type="video/webm" />
        <track default kind="captions" srcLang={"en"} src="/" />

        <FaTriangleExclamation />
      </video>

      {displayButtons && (
        <div
          className={cn(
            "absolute z-10 h-full w-min pl-2 flex flex-col",
            buttonsPostion
          )}
        >
          <button
            onClick={() =>
              isPlaying == null ? handleRestart() : handlePlayPause()
            }
            className={cn(
              "mb-2 rounded-full shadow-lg bg-gray-800 hover:bg-gray-600s cursor-pointer transition-all duration-300 p-2 flex flex-shrink-0 items-center justify-center"
            )}
          >
            {isPlaying ? (
              <FaPause size={"0.7rem"} color="white" />
            ) : isPlaying == false ? (
              <FaPlay size={"0.7rem"} color="white" />
            ) : (
              <FaRotateRight size={"0.7rem"} color="white" />
            )}
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className={cn(
              "mb-2 rounded-full shadow-lg bg-gray-800 hover:bg-gray-600s cursor-pointer transition-all duration-300 p-2 flex flex-shrink-0 items-center justify-center"
            )}
          >
            {isMuted ? (
              <FaVolumeOff size={"0.7rem"} color="white" />
            ) : (
              <FaVolumeHigh size={"0.7rem"} color="white" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
