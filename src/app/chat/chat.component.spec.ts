import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailSenderComponent } from '../email-sender/email-sender.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';

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

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue('data')
  }
  
  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      declarations: [ ChatComponent,EmailSenderComponent ],
      providers: [
        {provide:AngularFireDatabase, useValue:angularFiresotreStub},AuthService,{provide:AngularFireAuth,useValue:afAuthStub}
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
    expect(component.login()).toBe(false);
  });
});
