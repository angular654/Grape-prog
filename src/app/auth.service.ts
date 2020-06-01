import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { switchMap, first, map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {  }
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
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
  this.afAuth.auth.signOut();
}
isLoggedIn() {
  return this.afAuth.authState.pipe(first()).toPromise();
}

async Output() {
  const user = await this.isLoggedIn()
  if (user) {
    console.log('user was logged');
  } else {
    console.log('bruh');
 }
}

}
