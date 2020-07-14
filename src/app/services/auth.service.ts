import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import * as firebase from 'firebase/app';
import { User } from '../models/User'


@Injectable()
export class AuthService {

  constructor(public fire: FirebaseService) { }
  doGoogleLogin() {
    return this.fire.googleLogin()
  }
  registerUser(value : User) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
  getUser() {
    return this.fire.getUser()
  }
  signOut() {
    return this.fire.signout()
  }
}
