import React from "react";
import { Typography } from "@mui/material";

const MuiCardDesc = ({ content, gradient }) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textShadow: { sm: "none", md: "0px 4px 4px rgba(0, 0, 0, 0.25);" },
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: `${gradient}`,
          mb: { xs: "11.94px", md: "16px" },
        }}
      >
        {content}
      </Typography>
    </>
  );
};

export default MuiCardDesc;
