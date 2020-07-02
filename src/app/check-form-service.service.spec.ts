import { CheckFormService } from './check-form-service.service';

describe('CheckFormServiceService', () => {
  let service: CheckFormService;
  beforeEach(() => {
    service = {
      checkName(str) {
        if (str == undefined)
          return false;
        else
          return true;
      },
      checkPassword: () => true,
      passwordLength: () => true,
      nameLength: () => true,
      checkLogin: () => true,
      loginLength: () => true,
      checkEmail: () => true,
      emailValid: () => true
    } as any;
  });

  const user = {
    name: "Max",
    login: "maxsxssd",
    email: "m.sddfd@gmail.com",
    password: "sdsavg378dyq8d7saG"
  };
  it('checkName should return true', () => {
    spyOn(service, 'checkName').and.returnValue(true);
    service =  new CheckFormService
    expect(service.checkName(user.name)).toBe(true);
  });

  it('checkLogin should return true', () => {
    spyOn(service, 'checkLogin').and.returnValue(true);
    service =  new CheckFormService
    expect(service.checkLogin(user.login)).toBe(true);
  });

  it('checkEmail should return true', () => {
    spyOn(service, 'checkEmail').and.returnValue(true);
    service =  new CheckFormService
    expect(service.checkEmail(user.email)).toBe(true);
  });

  it('checkPassword should return true', () => {
    spyOn(service, 'checkPassword').and.returnValue(true);
    service =  new CheckFormService
    expect(service.checkPassword(user.password)).toBe(true);
  });

  it('nameLength should return true', () => {
    spyOn(service, 'nameLength').and.returnValue(true);
    service =  new CheckFormService
    expect(service.nameLength(user.name)).toBe(true);
  });

  it('loginLength should return true', () => {
    spyOn(service, 'loginLength').and.returnValue(true);
    service =  new CheckFormService
    expect(service.loginLength(user.login)).toBe(true);
  });

  it('passwordLength should return true', () => {
    spyOn(service, 'passwordLength').and.returnValue(true);
    service =  new CheckFormService
    expect(service.passwordLength(user.password)).toBe(true);
  });

  it('emailValid should return true', () => {
    spyOn(service, 'emailValid').and.returnValue(true);
    service =  new CheckFormService
    expect(service.emailValid(user.email)).toBe(true);
  });
  it('emailValid should return false', () => {
    spyOn(service, 'emailValid').and.returnValue(false);
    service =  new CheckFormService
    expect(service.emailValid("fsdf")).toBe(false);
  });
  it('passwordLength should return false', () => {
    spyOn(service, 'passwordLength').and.returnValue(false);
    service =  new CheckFormService
    expect(service.passwordLength("ww")).toBe(false);
  });
  it('loginLength should return false', () => {
    spyOn(service, 'loginLength').and.returnValue(false);
    service =  new CheckFormService
    expect(service.loginLength("s")).toBe(false);
  });

  it('nameLength should return false', () => {
    spyOn(service, 'nameLength').and.returnValue(false);
    service =  new CheckFormService
    expect(service.nameLength('ws')).toBe(false);
  });
  it('checkPassword should return false', () => {
    spyOn(service, 'checkPassword').and.returnValue(false);
    service =  new CheckFormService
    expect(service.checkPassword(undefined)).toBe(false);
  });
  it('checkEmail should return false', () => {
    spyOn(service, 'checkEmail').and.returnValue(false);
    service =  new CheckFormService
    expect(service.checkEmail(undefined)).toBe(false);
  });
  it('checkLogin should return false', () => {
    spyOn(service, 'checkLogin').and.returnValue(false);
    service =  new CheckFormService
    expect(service.checkLogin(undefined)).toBe(false);
  });
  it('checkName should return false', () => {
    spyOn(service, 'checkName').and.returnValue(false);
    service =  new CheckFormService
    expect(service.checkName(undefined)).toBe(false);
  });
});

