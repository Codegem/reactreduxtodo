import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";

const ShowDate = ({ open, date, openHandler, finish, anchorEl }) => {
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={openHandler}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box p={2}>
        <Typography>Created Date: {date}</Typography>
        {finish !== "" && <Typography>Finished Date: {finish}</Typography>}
      </Box>
    </Popover>
  );
};

export default ShowDate;
