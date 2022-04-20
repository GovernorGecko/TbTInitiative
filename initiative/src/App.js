
import * as React from 'react';

import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material/'

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
    <Grid container>
      <Grid item xs={4}>
        <List
          sx={style.list}
          component="nav"
          aria-labelledby="nested-list-subheader"
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
      </Grid>
      <Grid item xs={8}>hi</Grid>
    </Grid>
  );
}


export default App;
