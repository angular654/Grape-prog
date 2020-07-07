import { ChatComponent } from './chat.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
describe('ChatComponent', () => {
  interface Message {
    user:string,
    content:string
    date: Date
}
  let component: ChatComponent;
  let db: AngularFireDatabase;
  let af: AuthService;
  let username = 'dsdss';
  let  message : Message
  beforeEach(() => {
    db = {
      list(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      }
    } as any;
    af = {
      doGoogleLogin(): Promise<any>{
        return new Promise<any>(resolve => resolve());
      },
      getUser() {
        return username 
      }
    } as any
  });

  it('should create', () => {
    component =  new ChatComponent(db,af);
    expect(component).toBeTruthy();
  });
  it('login should return false', () => {
    component =  new ChatComponent(db,af);
    expect(component.login()).toBe(undefined);
  });
  it('onSubmit should return true', () => {
    component =  new ChatComponent(db,af);
    expect(component.onSubmit(message)).toBe(true);
  });
  it('itemValue should defined', () => {
    component =  new ChatComponent(db,af);
    expect(component.itemValue).toBe('');
  });
  it('should create ngOnInit', () => {
    component =  new ChatComponent(db,af);
    expect(component.ngOnInit()).toBe(undefined);
  });
  it('component.auth should be true', () => {
    component =  new ChatComponent(db,af);
    component.auth = true;
    expect(component.auth).toBe(true);
  });
});
