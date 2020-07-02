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
    return name.length >= 3;
  }
  loginLength(login){
    return login.length >= 4;
  }
  emailValid(email){
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi.test(email))
      return false;
      else
      return true;
  }
  passwordLength(password){
    return password.length >= 11;
  }
}