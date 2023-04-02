import React from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Typography variant="h1" sx={{ mb: { xs: "13px", md: "12px" } }}>
        BIGVU 101 Crash Course
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: { xs: "17px", md: "32px" } }}>
        Zero editing experience to pro - your journey starts here.
        <br /> Watch step-by-step video lessons how to make videos with impact.
      </Typography>
    </>
  );
};

export default Hero;
