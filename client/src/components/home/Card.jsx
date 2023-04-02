import React from "react";
import { Link } from "react-router-dom";
import { Card, Box } from "@mui/material";

import { useFetch } from "../../hooks";

import { MuiCardHeader, MuiCardContent, MuiCardDesc } from "./card/";

const MuiCard = ({ gradient, course }) => {
  const { data } = useFetch(`${course.id}`);

  const isCourseCompleted = () => {
    const isChecked = JSON.parse(
        localStorage.getItem(`isChecked_${course.id}`)
      ),
      chapters = data.chapters || [];
    if (!isChecked || isChecked.length !== chapters.length) {
      return false;
    }
    return isChecked.every((item) => item === true);
  };

  return (
    <Box>
      <MuiCardDesc content={course.headline} gradient={gradient.linear} />
      <Link to={`/course/${course.id}`} class="react-link">
        <Card
          sx={{
            width: { md: "386.26px" },
            height: { xs: "176.25px", md: "180px" },
            borderRadius: "20px",
            border: "1px solid rgba(123,141,177,0.6)",
          }}
        >
          <MuiCardHeader
            gradient={gradient}
            videos={data.chapters?.length}
            description={course.description}
            isCourseCompleted={isCourseCompleted()}
          />
          <MuiCardContent gradient={gradient} content={course.summary} />
        </Card>
      </Link>
    </Box>
  );
};

export default MuiCard;
