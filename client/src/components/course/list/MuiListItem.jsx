import React from "react";
import { ListItemButton, Typography, ListItemIcon } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import timeConverter from "../../../utils/timeConverter";
import { PlayVideo, Check } from "../../../assets";

const MuiListItem = ({
  item,
  index,
  currentChapter,
  setChapter,
  isChecked,
}) => {
  return (
    <ListItemButton
      key={uuidv4()}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "8px",
        "&.Mui-selected": {
          bgcolor: "tertiary.main",
        },
      }}
      // eslint-disable-next-line eqeqeq
      selected={currentChapter == index}
      onClick={() => setChapter(index)}
    >
      <ListItemIcon sx={{ minWidth: 0 }}>
        {isChecked[index] ? (
          <Check key={uuidv4()} />
        ) : (
          <PlayVideo key={uuidv4()} />
        )}
      </ListItemIcon>
      <Typography variant="body2" ml="8px" mr="auto">
        {index + 1}. {item.title}
      </Typography>
      <Typography mr="11px" variant="body2">
        {timeConverter(item.asset.resource.duration)}
      </Typography>
    </ListItemButton>
  );
};

export default MuiListItem;
