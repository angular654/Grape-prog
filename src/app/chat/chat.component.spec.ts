import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailSenderComponent } from '../email-sender/email-sender.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { CheckFormService } from '../check-form-service.service';
import {of} from 'rxjs';
describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  
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

  const db = {
    list(n:string){
      return{
        valueChanges: () => of([]),
        push:(data: any) => {}
      };
    }
  } as any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      declarations: [ ChatComponent,EmailSenderComponent ],
      providers: [
        {provide:AngularFireDatabase, useValue:db},AuthService,{provide:AngularFireAuth,useValue:afAuthStub},
        CheckFormService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
