import {Refference} from './refference';
export class Customer {

  constructor(
    private _id?: number,
    private _userId?: string,
    private _password?: string,
    private _confirmPassword?: string,
    private _firstName?: string,
    private _lastName?: string,
    private _contactName?: string,
    private _contactRelation?: string,
    private _gender?: string,
    private _religion?: string,
    private _email?: string,
    private _refference?: Refference,
    private _dobYear?: number,
    private _wmReligion?: string,
    private _education?: string,
    private _relocation?: string,
    private _foodHabit?: string,
    private _wishToSay?: string,
    private _profileFilled?: boolean,

    private _residencalDetails?: string,
    private _residencalCity?: string,
    private _residencalCountry?: string,
    
    private _residenceDetails?: string,
    private _workPlaceDetails?: string,
    private _workPlaceCity?: string,
    private _workPlaceCountry?: string,
    private _worklocationDetails?: string,
    private _faceBook?: string,
    

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

  set contactName(value) {
    this._contactName = value;
  }

  get contactName() {
    return this._contactName;
  }
  set contactRelation(value) {
    this._contactRelation = value;
  }

  get contactRelation() {
    return this._contactRelation;
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
  get dobYear() {
    return this._dobYear;
  }
  set dobYear(value) {
    this._dobYear = value;
  }
  set religion(value) {
    this._religion = value;
  }
  get religion() {
    return this._religion;
  }
  
  get refference() {
    return this._refference;
  }
  set refference(value: Refference) {
    this._refference = value;
  }
  get wmReligion() {
    return this._wmReligion;
  }
  set wmReligion(value) {
    this._wmReligion = value;
  }
  
  get education() {
    return this._education;
  }
  set education(value) {
    this._education = value;
  }
  
  get foodHabit() {
    return this._foodHabit;
  }
  set foodHabit(value) {
    this._foodHabit = value;
  }
  get relocation() {
    return this._relocation;
  }
  set relocation(value: string) {
    this._relocation = value;
  }

  get profileFilled() {
    return this._profileFilled
  }
  set profileFilled(value: boolean) {
    this._profileFilled = value;
  }

  get wishToSay() {
    return this._wishToSay;
  }
  set wishToSay(value) {
    this._wishToSay = value;
  }
  
  get faceBook() {
    return this._faceBook;
  }
  set faceBook(value) {
    this._faceBook = value;
  }

  get residencalDetails() {
    return this._residencalDetails;
  }
  set residencalDetails(value) {
    this._residencalDetails = value;
  }

  get residencalCountry() {
    return this._residencalCountry;
  }
  set residencalCountry(value) {
    this._residencalCountry = value;
  }
  
  get residencalCity() {
    return this._residencalCity;
  }
  set residencalCity(value) {
    this._residencalCity = value;
  }
/*
  get residenceDetails() {
    //this._residenceDetails=this.residencalCity+"\,"+this.residencalCountry+"\,"+this.residencalDetails;
    return this._residenceDetails;
  }
  set residenceDetails(value) {
    if(value!=null){
    this._residenceDetails=value;
   var values = value.split('\,');
   this.residencalCity=values[0];
   this.residencalCountry=values[1];
   this.residencalDetails=values[2];
    }else{
      this._residenceDetails=this.residencalCity+"\,"+this.residencalCountry+"\,"+this.residencalDetails;
    }
      
  }

  get worklocationDetails() {
    return this._worklocationDetails;
  }
  set worklocationDetails(value) {

    if(value!=null){
    this._worklocationDetails=value;
    var values = value.split('\,');
   this.workPlaceCity=values[0];
   this.workPlaceCountry=values[1];
   this.workPlaceDetails=values[2];
  }else{
    this._worklocationDetails=this.workPlaceCity+"\,"+this.workPlaceCountry+"\,"+this.residencalDetails;
    
  }
  }
  */
  get workPlaceDetails() {
    return this._workPlaceDetails;
  }
  set workPlaceDetails(value) {
    this._workPlaceDetails = value;
  }
  
  get workPlaceCountry() {
    return this._workPlaceCountry;
  }
  set workPlaceCountry(value) {
    this._workPlaceCountry = value;
  }
  
  get workPlaceCity() {
    return this._workPlaceCity;
  }
  set workPlaceCity(value) {
    this._workPlaceCity = value;
  }
  
}
