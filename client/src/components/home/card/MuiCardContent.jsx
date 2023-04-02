import React from "react";
import { CardContent, List, Typography, Box, Stack } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

import { Dot, PlayCircle } from "../../../assets";

const MuiCardContent = ({ gradient, content }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <CardContent
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        p: 0,
      }}
    >
      <List sx={{ columns: 2, pt: "12px", pl: "16px" }} disablePadding>
        {content.map((bullet) => (
          <Typography
            component={Stack}
            direction="row"
            alignItems="start"
            variant="body1"
            gap="6px"
          >
            <Box sx={{ mt: "-1px" }}>
              <Dot {...gradient} />
            </Box>
            {bullet}
          </Typography>
        ))}
      </List>
      {matches && (
        <Box sx={{ position: "absolute", right: "30px", cursor: "pointer" }}>
          <PlayCircle />
        </Box>
      )}
    </CardContent>
  );
};

export default MuiCardContent;
