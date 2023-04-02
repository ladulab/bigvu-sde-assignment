import React from "react";
import { CardHeader, CardMedia, Box, Button, Typography } from "@mui/material";

import { VideoCamera, LinearPaint, Check } from "../../../assets";

const MuiCardHeader = ({
  gradient,
  videos = 0,
  description,
  isCourseCompleted,
}) => {
  return (
    <CardHeader
      sx={{ m: 0, p: 0, ml: "16px" }}
      title={
        <>
          <Box
            sx={{
              position: "relative",
              display: "flex",
            }}
          >
            <Button
              sx={{
                mt: "16px",
                backgroundColor: "secondary.main",
                borderRadius: "4px",
                py: "5px",
                "& .MuiButton-startIcon": {
                  marginRight: { xs: "4px", md: "5.43px" },
                },
                "&:hover": { backgroundColor: "primary.main" },
              }}
              startIcon={<VideoCamera />}
            >
              <Typography variant="h4" sx={{ mr: "4px" }}>
                {videos} videos{" "}
              </Typography>
              {isCourseCompleted && <Check width="15" height="15" />}
            </Button>{" "}
            <CardMedia
              sx={{ position: "absolute", right: { xs: "-27px", md: 0 } }}
            >
              <LinearPaint width="164" height="90.91" {...gradient} />
            </CardMedia>
          </Box>
        </>
      }
      subheader={
        <Typography
          variant="h3"
          sx={{
            pt: `${description.length > 17 ? "21px" : "43px"}`,
            width: "65%",
          }}
        >
          {description}
        </Typography>
      }
    />
  );
};

export default MuiCardHeader;
