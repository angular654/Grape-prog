import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  doGoogleLogin() {
    return new Promise<any>((resolve) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          console.log('You have been successfully logged in!');
          return true
        }).catch((error) => {
          console.log(error);
          return false
        })
      return false
    })
  }
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
  getUser() {
    return this.afAuth.auth.currentUser.displayName;
  }
  signOut() {
    return this.afAuth.auth.signOut();
  }
}
