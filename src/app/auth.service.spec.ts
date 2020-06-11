import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PromiseType } from 'protractor/built/plugins';

describe('AuthService', () => {
  const user = {
    name:"Max",
    login:"maxsxssd",
    email:"m.sddfd@gmail.com",
    password:"sdsavg378dyq8d7saG"
  };
  
  const afAuthStub = {
    auth: {
      createUserWithEmailAndPassword(): Promise<void> {
        return new Promise<void>(resolve => resolve());
      },
      currentUser: {
        uid: 'blub',
        sendEmailVerification(): Promise<void> {
          return new Promise<void>(resolve => resolve());
        },
      }
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
  it(' getUser() should return string', () => {
    const service: AuthService = TestBed.get(AuthService);
    let str :string
    expect(service.getUser()).toBe(str);
  });
  it('registerUser() should equal ', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.registerUser(user)).toEqual(afAuthStub.auth.createUserWithEmailAndPassword());
  });
}); 
