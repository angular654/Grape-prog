import { ChatComponent } from './chat.component';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { listChanges } from '@angular/fire/database';
describe('ChatComponent', () => {
  interface Message {
    user:string,
    content:string
    date: Date
}
  let component: ChatComponent;
  let fs: FirebaseService;
  let af: AuthService;
  let username = 'dsdss';
  let  message : Message
  beforeEach(() => {
    fs = {
      create(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      },
      createlist(){
        return {
          valueChanges: () => of([])
        };
      }
    } as any
    af = {
      doGoogleLogin(): Promise<any>{
        return new Promise<any>(resolve => resolve());
      },
      getUser() {
        return username 
      }
    } as any
    component =  new ChatComponent(fs,af);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login should return false', () => {
    expect(component.login()).toBe(undefined);
  });
  it('onSubmit should return true', () => {
    expect(component.onSubmit()).toBe(true);
  });
  it('itemValue should defined', () => {
    expect(component.itemValue).toBe('');
  });
  it('should create ngOnInit', () => {
    expect(component.ngOnInit()).toBe(undefined);
  });
  it('component.auth should be true', () => {
    component.auth = true;
    expect(component.auth).toBe(true);
  });
});
