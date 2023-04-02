import React, { useRef } from "react";
import ReactPlayer from "react-player";

import { useMediaQuery } from "@mui/material";

const VideoPlayer = ({
  currentVideo,
  currentChapter,
  data,
  nextChapter,
  handle2DStateChange,
  getSeek,
}) => {
  const playerRef = useRef(null);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1296px)");

  return (
    <ReactPlayer
      ref={playerRef}
      width={isAboveMediumScreen ? "883" : "328"}
      height={isAboveMediumScreen ? "496" : "200"}
      className="react-player"
      controls
      playing={true}
      url={currentVideo ?? data.chapters[0].asset.resource.stream.url}
      onStart={() => {
        playerRef.current.seekTo(getSeek[currentChapter] ?? 0);
      }}
      onProgress={(state) => {
        handle2DStateChange(
          `isSeek`,
          currentChapter,
          playerRef.current.getCurrentTime()
        );
        if (state.playedSeconds > 10)
          handle2DStateChange(`isChecked`, currentChapter, true);
      }}
      onPause={() => {
        handle2DStateChange(
          `isSeek`,
          currentChapter,
          playerRef.current.getCurrentTime()
        );
      }}
      onEnded={() => {
        handle2DStateChange(`isChecked`, currentChapter, true);
        handle2DStateChange(`isSeek`, currentChapter, null);
        nextChapter(currentChapter + 1);
      }}
    />
  );
};

export default VideoPlayer;
