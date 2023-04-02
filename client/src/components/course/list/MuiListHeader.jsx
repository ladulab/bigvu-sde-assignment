import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { Bookmark } from "../../../assets";

const MuiListHeader = ({ title, watched, total }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: { xs: "center", md: "start" },
        alignItems: "center",
        mb: { xs: "17px", md: "29px" },
      }}
      gap="16px"
    >
      <Typography variant="h5">{title}</Typography>
      <Button
        sx={{
          bgcolor: "tertiary.main",
          borderRadius: "40px",
        }}
      >
        <Bookmark />
        <Typography variant="subtitle2">{watched}/{total}</Typography>
      </Button>
    </Box>
  );
};

export default MuiListHeader;
