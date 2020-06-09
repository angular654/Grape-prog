import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from "../auth.service";
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from '../check-form-service.service';
import { Router } from '@angular/router';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  beforeEach(async(() => {
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

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AuthComponent],
      providers: [{provide:AuthService, useValue:afAuthStub},CheckFormService,
        {provide:Router,useClass: class { navigate = jasmine.createSpy("navigate");}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('userRegisterClick() should return false', () => {
    expect(component.userRegisterClick()).toBe(false);
  });
});
