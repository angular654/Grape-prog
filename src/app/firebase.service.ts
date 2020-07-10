import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from './interfaces/User'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public storage: AngularFireStorage) {

  }
  create(item, content) {
    return this.db.list(item).push(content)
  }
  createlist(item) {
    return this.db.list(item)
  }
  update(item, content, updateItem) {
    return item.update(updateItem, content)
  }
  delete(item, key) {
    return item.remove(key)
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
    return this.storage.ref(ref)
  }
  uploadFile(path, file: File) {
    return this.storage.upload(path, file)
  }
  getUser() {
    return this.afAuth.auth.currentUser.displayName
  }
  changes(path, file: File) {
    return this.storage.upload(path, file).snapshotChanges()
  }
  signout() {
    return this.afAuth.auth.signOut();
  }
}
