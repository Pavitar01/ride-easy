"use client";

import { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import "./style.scss";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Handles video end event to reset play state
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Box className="video-player" onClick={togglePlayPause}>
      <video
        ref={videoRef}
        className="video"
        width="343px"
        height="208px"
        onEnded={handleVideoEnd} // Auto pause on video end
      >
        <source src="/motor-bike.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <IconButton className="play-pause">
        {isPlaying ? (
          <PauseIcon color="inherit" fontSize="inherit" />
        ) : (
          <PlayArrowIcon color="inherit" fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
}
