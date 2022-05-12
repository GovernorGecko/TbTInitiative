import React, { useState } from "react";

import {
  Button,
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
  const [inInitiative, setInInitiative] = useState(false);
  const [initiative, setInitiative] = useState([]);
  const [monsters, setMonsters] = useState([new Entity("test")]);
  const [players, setPlayers] = useState([]);

  // Add an Entity to our Initiative
  const addToInitiative = (entity) => {
    if (entity instanceof Entity) {
      let initiativeCopy = [...initiative];
      initiativeCopy.push(new Initiative(entity));
      setInitiative(initiativeCopy);
    }
  };

  // Handles Toggling Initiative
  const handleToggleInitiative = () => {
    // Not in Initiative yet?  Then iterate, rolling initiative.
    if (!inInitiative) {
      for (let i of initiative) {
        console.log(i.getName());
      }
    }
    setInInitiative(!inInitiative);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <List sx={style.list} component="nav">
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
        <Button onClick={handleToggleInitiative}>Start Initiative</Button>
        <Grid container>
          {initiative.map((entity, index) => (
            <Grid item xs={12} key={index}>
              {entity.getName()} - {entity.getInitiative()}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
