import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSenderComponent } from './email-sender.component';
import { FormsModule } from '@angular/forms';
import { CheckFormService } from '../check-form-service.service';

describe('EmailSenderComponent', () => {
  let component: EmailSenderComponent;
  let fixture: ComponentFixture<EmailSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EmailSenderComponent],
      providers: [CheckFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
