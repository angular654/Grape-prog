import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PromiseType } from 'protractor/built/plugins';
import { Observable } from 'rxjs';
import {of} from 'rxjs'
import { auth, User } from 'firebase';

describe('AuthService', () => {
  const user = {
    name:"Max",
    login:"maxsxssd",
    email:"m.sddfd@gmail.com",
    password:"sdsavg378dyq8d7saG"
  };
  const afAuthStub = {
    auth: {
      createUserWithEmailAndPassword(): Promise<any> {
        return new Promise<any>(resolve => resolve());
      },
      signOut(): Promise<void> {
        return new Promise<void>(resolve => resolve());
      },
      authState(): Observable<User>{
        return new Observable<firebase.User>()
      },
      currentUser: {
        uid: 'blub',
        sendEmailVerification(): Promise<void> {
          return new Promise<void>(resolve => resolve());
        },
      },
    }
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
    providers: [AuthService,{provide:AngularFireAuth, useValue:afAuthStub}]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
  it(' doGoogleLogin should used', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.doGoogleLogin()).toBeTruthy();
  }); 
  it(' getUser() should return string', () => {
    const service: AuthService = TestBed.get(AuthService);
    let str :string
    expect(service.getUser()).toBe(str);
  });
  it('registerUser() should used', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.registerUser(user)).toBeTruthy();
  });
  it('signOut() should used', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.signOut()).toBeTruthy();
  });
  it('isLoggedIn() should used', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isLoggedIn()).toBeTruthy();
  });
  it('Output() should used', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.Output()).toBeTruthy();
    
  });
}); 
