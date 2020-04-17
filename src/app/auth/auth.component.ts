import { Component, OnInit, VERSION } from '@angular/core';
import { AuthService } from "../auth.service";
import { CheckFormService } from '../check-form-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register = false;
  public version = VERSION.full;
  public reactiveForm: FormGroup = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required)
  });
  constructor(public auth : AuthService, public checkForm: CheckFormService,public router: Router) { }
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
     alert('Имя не введено');
      this.router.navigate(['reg']);
      return false;
      }
    else if (!this.checkForm.checkName(user.login)){
      alert('Логин не введен');
      this.router.navigate(['reg']);
        return false;
      }
    else if (!this.checkForm.checkName(user.email)){
      alert('Email не введен');
      this.router.navigate(['reg']);
        return false;
      }
    else if (!this.checkForm.checkName(user.password)){
      alert('Пароль не введен');
      this.router.navigate(['reg']);
        return false;
      }
      else  if (!this.checkForm.passwordLength(user.password)){
        alert("Пароль слишком короткий");
        this.router.navigate(['reg']);
       return false;
       }
    else  if (!this.checkForm.nameLength(user.name)){
      alert("Имя слишком короткое");
       this.router.navigate(['reg']);
       return false;
       }
    else  if (!this.checkForm.loginLength(user.login)){
      alert("Логин слишком короткий");
      this.router.navigate(['reg']);
       return false;
       }
     else  if (!this.checkForm.emailValid(user.email)){
        alert(" Email неверный");
        this.router.navigate(['reg']);
         return false;
         }
    else  if (!this.checkForm.emailLength(user.email)){
      alert(" Email слишком короткий");
      this.router.navigate(['reg']);
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
