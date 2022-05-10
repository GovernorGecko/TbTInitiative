import Entity from "./Entity";

class Initiative {

    constructor(entity) {
        this._entityRef = entity
        this._initiative = 0
    }

    // Gets the Entity's name
    getName() {
        return this._entityRef.getName()
    }

    setInitiative(initiative) {
        this._initiative = initiative
    }
    
}

export default Initiative