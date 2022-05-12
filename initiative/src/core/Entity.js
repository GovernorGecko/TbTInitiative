/*
  Entity
*/
class Entity {
  // UUID for our Entity Class
  static lastKey = 0;

  constructor(name) {
    this._id = ++Entity.lastKey;
    this._name = name;
  }

  // Gets this Entity's UUID
  getId() {
    return this._id;
  }

  // Gets this Entity's Name
  getName() {
    return this._name;
  }
}

export default Entity;
