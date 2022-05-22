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
import { GroupBygetId } from "./core/Helpers";
import Initiative from "./core/Initiative";
import InitiativeWidget from "./components/widgets/InitiativeWidget";

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
      // Group our Initiative's by their Entity Ids
      let groupedIds = GroupBygetId(initiative);

      // Iterate our Groups
      for (let id of Object.keys(groupedIds)) {
        for (let entities of groupedIds[id]) {
          console.log(entities);
        }
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
        {initiative.map((entity, index) => (
          <InitiativeWidget key={index} entity={entity} />
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
