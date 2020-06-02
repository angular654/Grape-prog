import { TestBed } from '@angular/core/testing';

import { CheckFormService } from './check-form-service.service';

describe('CheckFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [CheckFormService]}));
  const user = {
    name:"Max",
    login:"maxsxssd",
    email:"m.sddfd@gmail.com",
    password:"sdsavg378dyq8d7saG"
};

  it('checkName should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkName(user.name)).toBeTruthy();
  });

  it('checkLogin should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkLogin(user.login)).toBeTruthy();
  });

  it('checkEmail should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkEmail(user.email)).toBeTruthy();
  });

  it('checkPassword should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkPassword(user.password)).toBeTruthy();
  });
  
  it('checkPassword should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkEmail(user.password)).toBeTruthy();
  });
  
  it('nameLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.nameLength(user.name)).toBeTruthy();
  });

  it('loginLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.loginLength(user.login)).toBeTruthy();
  });

  it('emailLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailLength(user.email)).toBeTruthy();
  });

  it('passwordLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.passwordLength(user.password)).toBeTruthy();
  });

  it('emailValid should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailValid(user.email)).toBeTruthy();
  });
  
});

