import { Injectable } from '@angular/core';

@Injectable()
export class CheckFormService {

  constructor() { }

  checkName(name){
    if (name == undefined)
      return false;
      else
      return true;
  }
  checkLogin(login){
    if (login == undefined)
      return false;
      else
      return true;
  }
  checkEmail(email){
    if (email == undefined)
      return false;
      else
      return true;
  }
  checkPassword(password){
    if (password == undefined)
      return false;
      else
      return true;
  }
  nameLength(name){
    if (name.length < 4)
      return false;
      else
      return true;
  }
  loginLength(login){
    if (login.length < 4)
      return false;
      else
      return true;
  }
  emailLength(email){
    if (email.length < 3)
      return false;
      else
      return true;
  }
  passwordLength(password){
    if (password.length < 11)
      return false;
      else
      return true;
  }
}