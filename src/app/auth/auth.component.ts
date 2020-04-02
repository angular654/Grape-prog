import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { CheckFormService } from '../check-form-service.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register = false;
  constructor(public auth : AuthService, public checkForm: CheckFormService) { }
  name:string;
  login:string;
  email:string;
  password:string;
  ngOnInit() {
  }
  userRegisterClick() {
    const user = {
        name:this.name,
        login:this.login,
        email:this.email,
        password:this.password
    };
    if (!this.checkForm.checkName(user.name)){
     console.warn('Имя не введено');
      return false;
      }
    else if (!this.checkForm.checkName(user.login)){
      console.warn('Логин не введен');
        return false;
      }
    else if (!this.checkForm.checkName(user.email)){
      console.warn('Email не введен');
        return false;
      }
    else if (!this.checkForm.checkName(user.password)){
      console.warn('Пароль не введен');
        return false;
      }
      else  if (!this.checkForm.passwordLength(user.password)){
        console.warn("Пароль слишком короткий");
       return false;
       }
    else  if (!this.checkForm.nameLength(user.name)){
      console.warn("Имя слишком короткое");
       return false;
       }
    else  if (!this.checkForm.loginLength(user.login)){
      console.warn("Логин слишком короткий");
       return false;
       }
    else  if (!this.checkForm.emailLength(user.email)){
      console.warn(" Email слишком короткий");
       return false;
       }
    this.auth.registerUser(user);
    this.register = true;
  }
  GoogleCheckIn(){
     this.auth.doGoogleLogin();
     this.register = true;
  }

}
