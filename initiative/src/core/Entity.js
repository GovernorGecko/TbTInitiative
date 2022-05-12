/*
  Entity
*/
class Entity {
  static lastKey = 0;

  constructor(name) {
    this._id = ++Entity.lastKey;
    this._name = name;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }
}

export default Entity;
