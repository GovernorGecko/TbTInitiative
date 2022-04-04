
import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

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

const EntityList = ( { name, list, update } ) => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (    
      <>
        <ListItemButton >
            <ListItemIcon>
                <AddIcon />
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
                      <ListItemButton sx={style.entity} key={entity.id}>
                        <ListItemText primary={entity.name} />
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