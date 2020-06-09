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
    expect(service.checkName(user.name)).toBe(true);
  });

  it('checkLogin should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkLogin(user.login)).toBe(true);
  });

  it('checkEmail should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkEmail(user.email)).toBe(true);
  });

  it('checkPassword should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkPassword(user.password)).toBe(true);
  });
  
  it('nameLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.nameLength(user.name)).toBe(true);
  });

  it('loginLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.loginLength(user.login)).toBe(true);
  });

  it('emailLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailLength(user.email)).toBe(true);
  });

  it('passwordLength should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.passwordLength(user.password)).toBe(true);
  });

  it('emailValid should return true', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailValid(user.email)).toBe(true);
  });
  it('emailValid should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailValid("fsdf")).toBe(false);
  });
  it('passwordLength should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.passwordLength("ww")).toBe(false);
  });
  it('emailLength should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.emailLength("d@d")).toBe(false);
  });
  it('loginLength should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.loginLength("s")).toBe(false);
  });
  
  it('nameLength should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.nameLength('ws')).toBe(false);
  });
  it('checkPassword should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkPassword(undefined)).toBe(false);
  });
  it('checkEmail should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkEmail(undefined)).toBe(false);
  });
  it('checkLogin should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkLogin(undefined)).toBe(false);
  });
  it('checkName should return false', () => {
    const service: CheckFormService = TestBed.get(CheckFormService);
    expect(service.checkName(undefined)).toBe(false);
  });
});

