import React, { useState } from "react";

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Entity from "../core/Entity";
import EntityForm from "./EntityForm";

const style = {
  entity: {
    pl: 4,
  },
};

const EntityList = ({ name, list, setList, addToInitiative }) => {
  const [expanded, setExpanded] = useState(true);
  const [entityFormOpen, setEntityFormOpen] = useState(false);

  // Expand our Menu
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // Open the Entity Form
  const handleOpenEntityForm = () => {
    setEntityFormOpen(true);
  };

  // Close the Entity Form
  const handleCloseEntityForm = () => {
    setEntityFormOpen(false);
  };

  // Save a new Entity
  const handleSaveEntityForm = (entity) => {
    handleCloseEntityForm();

    // Create a shallow copy and update the list
    let listCopy = [...list];
    listCopy.push(entity);
    setList(listCopy);
  };

  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon onClick={handleOpenEntityForm} />
          <EntityForm
            open={entityFormOpen}
            handleClose={handleCloseEntityForm}
            handleSave={handleSaveEntityForm}
          />
        </ListItemIcon>
        <ListItemText primary={name} onClick={handleExpand} />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.length > 0
            ? list.map((entity) => {
                if (entity instanceof Entity) {
                  return (
                    <ListItemButton sx={style.entity} key={entity.getId()}>
                      <ListItemText primary={entity.getName()} />
                      <ArrowForwardIcon
                        onClick={() => addToInitiative(entity)}
                      />
                    </ListItemButton>
                  );
                } else {
                  return null;
                }
              })
            : null}
        </List>
      </Collapse>
    </>
  );
};

export default EntityList;
