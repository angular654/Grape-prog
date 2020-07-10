import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { CheckFormService } from '../services/check-form-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register = false;
  constructor(public auth: AuthService, public checkForm: CheckFormService, public router: Router) { }
  name: string;
  login: string;
  email: string;
  password: string;
  ngOnInit() {
  }
  userRegisterClick() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    };
    if (!this.checkForm.checkName(this.name || this.login || this.email || this.password)) {
      alert('Данные  не введены');
      this.router.navigate(['reg']);
      return false;
    }
    else if (!this.checkForm.passwordLength(this.password)) {
      alert("Пароль слишком короткий");
      this.router.navigate(['reg']);
      return false;
    }
    else if (!this.checkForm.nameLength(this.name)) {
      alert("Имя слишком короткое");
      this.router.navigate(['reg']);
      return false;
    }
    else if (!this.checkForm.loginLength(this.login)) {
      alert("Логин слишком короткий");
      this.router.navigate(['reg']);
      return false;
    }
    else if (!this.checkForm.emailValid(this.email)) {
      alert(" Email неверный");
      this.router.navigate(['reg']);
      return false;
    }
    this.auth.registerUser(user);
    this.register = true;
    this.router.navigate(['']);
  }
  GoogleCheckIn() {
    this.auth.doGoogleLogin();
    this.register = true;
    return true
  }

}
