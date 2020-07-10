import { AuthService } from './auth.service';
import {FirebaseService} from './firebase.service'
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
describe('AuthService', () => {
  let service: AuthService;
  let fs: FirebaseService;
  const user = {
    name: "Max",
    login: "maxsxssd",
    email: "m.sddfd@gmail.com",
    password: "sdsavg378dyq8d7saG"
  };
  beforeEach(() => {
    fs = {
      auth: {
        createUserWithEmailAndPassword(): Promise<void> {
          return new Promise<void>(resolve => resolve());
        },
        currentUser: {
          uid: 'blub',
          sendEmailVerification(): Promise<void> {
            return new Promise<void>(resolve => resolve());
          },
        },
      },
      signout(): Promise<void> {
        return  Promise.resolve(undefined)
      },
      getUser(): String{
          return 'username'
      },
      googleLogin(): Promise<any> {
        return   Promise.resolve(true)
      }

    } as any
    service = new AuthService(fs);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(' doGoogleLogin should used', () => {
    
    expect(service.doGoogleLogin()).toBeTruthy();
  });
  it(' getUser() should return string', () => {
    let str = 'username'
    expect(service.getUser()).toBe(str);
  });
  it('registerUser() should used', () => {
    expect(service.registerUser(user)).toBeTruthy();
  });
  it('signOut() should used', () => {
    expect(service.signOut()).toBeTruthy();
  });
}); 
