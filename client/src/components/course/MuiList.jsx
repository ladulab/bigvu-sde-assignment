import React from "react";
import { Stack, List } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { MuiListHeader, MuiListItem } from "./list";

const MuiList = ({ data, state, setChapter }) => {
  return (
    <Stack>
      <MuiListHeader
        title={data.headline}
        watched={state.isChecked.length}
        total={data.chapters.length}
      />
      <List
        sx={{
          border: "1px solid rgba(123,141,177,0.6)",
          borderRadius: "10px",
          maxHeight: "100%",
        }}
      >
        {data.chapters.map((item, index) => (
          <MuiListItem
            key={uuidv4()}
            item={item}
            index={index}
            currentChapter={state.currentChapter}
            setChapter={setChapter}
            isChecked={state.isChecked}
          />
        ))}
      </List>
    </Stack>
  );
};

export default MuiList;
