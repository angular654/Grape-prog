import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
describe('AuthService', () => {
  let service: AuthService;
  let fireAuth: AngularFireAuth;
  const user = {
    name: "Max",
    login: "maxsxssd",
    email: "m.sddfd@gmail.com",
    password: "sdsavg378dyq8d7saG"
  };
  beforeEach(() => {
    fireAuth = {
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
        signOut(): Promise<void> {
          return  Promise.resolve(undefined)
        }
      }
    } as any
    service = new AuthService(fireAuth);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(' doGoogleLogin should used', () => {
    
    expect(service.doGoogleLogin()).toBeTruthy();
  });
  it(' getUser() should return string', () => {
    let str: string
    expect(service.getUser()).toBe(str);
  });
  it('registerUser() should used', () => {
    expect(service.registerUser(user)).toBeTruthy();
  });
  it('signOut() should used', () => {
    expect(service.signOut()).toBeTruthy();
  });
}); 
