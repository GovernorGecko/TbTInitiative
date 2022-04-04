
import * as React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

import Entity from './core/Entity';
import EntityList from './components/EntityList';

const style = {
  list: {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }
}

function App() {

  const [monsters, setMonsters] = React.useState([new Entity(0, "test")]);
  const [players, setPlayers] = React.useState([]);
  

  return (
    <List
      sx={style.list}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Start" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Load" />
      </ListItemButton>
      <EntityList name="Players" list={players} update={setPlayers} />
      <EntityList name="Monsters" list={monsters} update={setMonsters} />
    </List>
  );
}


export default App;
