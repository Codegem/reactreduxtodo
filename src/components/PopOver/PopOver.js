import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";

const PopOver = ({ open, toggleOpen, inputEl }) => {
  console.log(inputEl);
  return (
    <>
      <Popover
        open={open}
        onClose={toggleOpen}
        anchorEl={inputEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Box p={2}>
          <Typography>Please type in something.</Typography>
        </Box>
      </Popover>
    </>
  );
};

export default PopOver;
