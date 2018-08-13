export class Refference {
  constructor(
    private _id?: number,
    private _name?: string,
    private _relationship?: string) {}
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  set relationship(value) {
    this._relationship = value;
  }
  get relationship() {
    return this._relationship;
  }
}
