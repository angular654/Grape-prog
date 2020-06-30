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
          return new Promise<void>(resolve => resolve());
        }
      },
    } as any
  });
  it('should be created', () => {
    service = new AuthService(fireAuth);
    expect(service).toBeTruthy();
  });
  it(' doGoogleLogin should used', () => {
    service = new AuthService(fireAuth);
    expect(service.doGoogleLogin()).toBeTruthy();
  });
  it(' getUser() should return string', () => {
    service = new AuthService(fireAuth);
    let str: string
    expect(service.getUser()).toBe(str);
  });
  it('registerUser() should used', () => {
    service = new AuthService(fireAuth);
    expect(service.registerUser(user)).toBeTruthy();
  });
  it('signOut() should used', () => {
    service = new AuthService(fireAuth);
    expect(service.signOut()).toBeTruthy();
  });
}); 
