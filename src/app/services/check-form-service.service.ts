import { Injectable } from '@angular/core';

@Injectable()
export class CheckFormService {

  constructor() { }

  checkName(name) {
    return name != undefined
  }
  checkLogin(login) {
    return login != undefined
  }
  checkEmail(email) {
    return email != undefined
  }
  checkPassword(password) {
    return password != undefined
  }
  nameLength(name) {
    return name.length >= 3;
  }
  loginLength(login) {
    return login.length >= 4;
  }
  emailValid(email) {
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi.test(email))
      return false;
    else
      return true;
  }
  passwordLength(password) {
    return password.length >= 11;
  }
}