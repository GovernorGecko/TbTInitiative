
import * as React from 'react';

import {
  Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Modal, Typography
} from '@mui/material/';

import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Entity from '../core/Entity';

const style = {
  entity: {
    pl: 4
  }
}

const EntityList = ( { name, list, update, initiative } ) => {

  const [open, setOpen] = React.useState(true);
  const [newEntityFormOpen, setNewEntityFormOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenNewEntityForm = () => {
    setNewEntityFormOpen(true)
  }

  const handleCloseNewEntityForm = () => {
    setNewEntityFormOpen(false)
  }

  return (    
      <>
        <ListItemButton >
            <ListItemIcon>
                <AddIcon onClick={handleOpenNewEntityForm}/>
                <Modal
                  open={newEntityFormOpen}
                  onClose={handleCloseNewEntityForm}
                >
                   <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Modal>
            </ListItemIcon>
            <ListItemText primary={name} onClick={handleClick}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {
              list.length > 0 ? 
                list.map(entity => {
                  if(entity instanceof Entity) {
                    return (
                      <ListItemButton sx={style.entity} key={entity.getId()}>
                        <ListItemText primary={entity.getName()} />
                        <ArrowForwardIcon />
                      </ListItemButton>
                    );
                  }
                  else {
                    return null;
                  }
                }
                ) : null
            }
            </List>
        </Collapse>
      </>
  );
}

export default EntityList