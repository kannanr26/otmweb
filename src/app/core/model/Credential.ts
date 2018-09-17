export class Credential {
  // Customize received credentials here


  constructor(
    private _id?: number,
    private _userId?: string,
    private _password?: string,
    private _name?: string,
    private _gender?: string,
    private _token?: string,
    private _admin?: boolean,
    private _isProfileFilled?: boolean,
    private _enable?: boolean,
    private _active?: boolean


  ) { }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  get userId() {
    return this._userId;
  }
  set userId(value) {
    this._userId = value;
  }

  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }

  get enable(): boolean {
    return this._enable;
  }
  set enable(value: boolean) {
    this._enable = value;
  }

  get isProfileFilled(): boolean {
    return this._isProfileFilled;
  }
  set isProfileFilled(value: boolean) {
    this._isProfileFilled = value;
  }
  get admin(): boolean {
    return this._admin;
  }
  set admin(value: boolean) {
    this._admin = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }

  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }


  get token() {
    return this._token;
  }
  set token(value) {
    this._token = value;
  }

}

