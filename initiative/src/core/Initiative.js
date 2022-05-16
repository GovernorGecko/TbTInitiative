/*
    Represents an Entity in Initiative
*/
class Initiative {
  constructor(entity) {
    this._entityRef = entity;
    this._initiative = 0;
  }

  // Gets the Entity's ID
  getId() {
    return this._entityRef.getId();
  }

  // Gets the Entity's Initiative
  getInitiative() {
    return this._initiative;
  }

  // Gets the Entity's name
  getName() {
    return this._entityRef.getName();
  }

  // Sets our initiative
  setInitiative(initiative) {
    if (typeof initiative === "number") {
      this._initiative = initiative;
    }
  }
}

export default Initiative;
