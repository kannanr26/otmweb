import {Refference} from './refference';
export class Customer {

  constructor(
    private _id?: number,
    private _userId?: string,
    private _password?: string,
    private _confirmPassword?: string,
    private _firstName?: string,
    private _lastName?: string,
    private _gender?: string,
    private _email?: string,
    private _refference?: Refference,
    // public token?: string ,
  ) {}

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

  set password(value :string) {
    this._password = value;
  }
  set confirmPassword(value:string) {
    this._confirmPassword = value;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get firstName() {
    return this._firstName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get lastName() {
    return this._lastName;
  }

  set gender(value) {
    this._gender = value;
  }
  get gender() {
    return this._gender;
  }
  set email(value) {
    this._email = value;
  }
  get email() {
    return this._email;
  }
  
  get refference() {
    return this._refference;
  }
  set refference(value: Refference) {
    this._refference = value;
  }
}
