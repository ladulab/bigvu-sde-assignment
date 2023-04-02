import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import { useFetch } from "../hooks/";
import { Hero, MuiCard, Loader } from "../components/";

const Home = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useFetch("");

  return (
    <Box
      sx={{
        mt: { xs: "42px", md: "36px" },
        ml: { xs: 0, xl: "42px" },
      }}
    >
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          gap: { xs: "17px", md: "28px" },
        }}
      >
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Typography>Error</Typography>
        ) : data.length === 0 ? (
          <Typography>Not data found</Typography>
        ) : (
          <>
            {data.result.map((course, index) => (
              <MuiCard
                key={index}
                course={course}
                gradient={theme.gradients[index % theme.gradients.length]}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
