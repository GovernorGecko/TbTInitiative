import React, { useState } from "react";

import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";

import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";

import Entity from "./core/Entity";
import EntityList from "./components/EntityList";
import Initiative from "./core/Initiative";

const style = {
  list: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  },
};

function App() {
  const [initiative, setInitiative] = useState([]);
  const [monsters, setMonsters] = useState([new Entity("test")]);
  const [players, setPlayers] = useState([]);

  // Add an Entity to our Initiative
  const addToInitiative = (entity) => {
    if (entity instanceof Entity) {
      let initiativeCopy = [...initiative];
      initiativeCopy.push(entity);
      setInitiative(initiativeCopy);
    }
  };

  //addToInitiative(monsters[0]);

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
          <EntityList
            name="Players"
            list={players}
            setList={setPlayers}
            addToInitiative={addToInitiative}
          />
          <EntityList
            name="Monsters"
            list={monsters}
            setList={setMonsters}
            addToInitiative={addToInitiative}
          />
        </List>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          {initiative.map((entity) => (
            <Grid item>{entity.getName()}</Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
