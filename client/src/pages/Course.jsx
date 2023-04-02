import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useFetch, initialState } from "../hooks/";
import { MuiList, VideoPlayer, Loader } from "../components/";

const Course = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(`${id}`);

  const memoizedInitialState = useMemo(() => initialState(id), [id]);
  const [state, setState] = useState(memoizedInitialState);

  const handle2DStateChange = useCallback(
    (key, index, value) => {
      const tmp = [...state[key]];
      tmp[index] = value;
      setState((prevState) => ({
        ...prevState,
        [key]: tmp,
      }));

      localStorage.setItem(`${key}_${id}`, JSON.stringify(tmp));
    },
    [state, id]
  );

  const setChapter = (index) => {
    if (index < data.chapters.length) {
      setState((prevState) => {
        const currentVideo = data.chapters[index].asset.resource.stream.url;
        return {
          ...prevState,
          currentChapter: index,
          currentVideo: currentVideo,
        };
      });
    }
  };

  useEffect(() => {
    localStorage.setItem(`currentChapter_${id}`, state.currentChapter);
    localStorage.setItem(`currentVideo_${id}`, state.currentVideo);
  }, [state.currentChapter, state.currentVideo, id]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        mt: { xs: "44px", md: "106px", xl: "172px" },
        gap: { xs: "18px", md: "29px" },
      }}
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Typography>Error..</Typography>
      ) : data.length === 0 ? (
        <Typography>No data found</Typography>
      ) : (
        <>
          <VideoPlayer
            currentVideo={state.currentVideo}
            currentChapter={state.currentChapter}
            data={data}
            nextChapter={setChapter}
            handle2DStateChange={handle2DStateChange}
            getSeek={state.isSeek}
          />
          <MuiList data={data} state={state} setChapter={setChapter} />
        </>
      )}
    </Box>
  );
};

export default Course;
