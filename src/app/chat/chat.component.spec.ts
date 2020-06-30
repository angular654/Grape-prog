import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailSenderComponent } from '../email-sender/email-sender.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CheckFormService } from '../check-form-service.service';
import { of, Observable } from 'rxjs';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
describe('ChatComponent', () => {
  let component: ChatComponent;
  let db: AngularFireDatabase;
  let af: AuthService;
  let username = 'dsdss';
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
    expect(component.onSubmit()).toBe(true);
  });
  it('itemValue should defined', () => {
    component =  new ChatComponent(db,af);
    expect(component.itemValue).toBe('');
  });
  it('should create ngOnInit', () => {
    component =  new ChatComponent(db,af);
    expect(component.ngOnInit()).toBe(undefined);
  });
});
