import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../app/auth/User'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, private storage: AngularFireStorage) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCyoRLATBuyGxIv3Zw3glOQUzUqNaju_zE',
      authDomain: 'grapeprogchatapp.firebaseapp.com',
      databaseURL: 'https://grapeprogchatapp.firebaseio.com',
      storageBucket: 'grapeprogchatapp.appspot.com',
      messagingSenderId: '943056497421',
      projectId: "grapeprogchatapp",
      appId: "1:943056497421:web:153f5785af2d21b0ad5e44",
      measurementId: "G-XY15XYK63Z"
    }
    firebase.initializeApp(firebaseConfig);
  }
  create(item: string, content) {
    this.db.list(item).push(content)
  }
  update(item: string, content, updateItem) {
    this.db.list(item).update(updateItem, content)
  }
  delete(item: string, key) {
    this.db.list(item).remove(key)
  }
  regUser(value: User) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
  googleLogin() {
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
  getRef(ref) {
    this.storage.ref(ref)
  }
  uploadFile(path, file: File) {
    this.storage.upload(path, file)
  }
  getUser() {
    this.afAuth.user
  }
}
