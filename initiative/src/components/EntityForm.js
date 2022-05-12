import React, { useState } from "react";

import { Box, Button, Modal, Stack, TextField } from "@mui/material/";

import Entity from "../core/Entity";

const style = {
  modal: {
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    left: "50%",
    p: 4,
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  },
};

/*
    Entity Form
*/
export const EntityForm = ({ open, handleClose, handleSave }) => {
  const [name, setName] = useState("");

  // We clicked on Save
  const handleSaveClick = () => {
    handleSave(new Entity(name));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style.modal}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Stack spacing={2} direction="row">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClick}>Save</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EntityForm;
