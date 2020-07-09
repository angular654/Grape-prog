import { EmailSenderComponent } from './email-sender.component';
import { CheckFormService } from '../check-form-service.service';

describe('EmailSenderComponent', () => {
  let component: EmailSenderComponent;
  let validator: CheckFormService;
  
  beforeEach(() => {
    validator = {
      checkEmail(email){
        if (email == undefined)
          return false;
          else
          return true;
      }
    } as any
    component  = new EmailSenderComponent(validator);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Check() should return false', () => {
    expect(component.Check()).toBe(false);
  });
  it('Check() should return true', () => {
    component.email = "r.dfssdg@gmail.com";
    expect(component.Check()).toBe(undefined);
  });
  it('should create ngOnInit()', () => {
    expect(component.ngOnInit()).toBe(undefined);
  });
});
