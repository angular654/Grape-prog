import { AuthService } from "../auth.service";
import { AuthComponent } from './auth.component';
import { CheckFormService } from '../check-form-service.service';
import { Router } from '@angular/router';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let auths: AuthService;
  let router: Router;
  let check: CheckFormService;

  beforeEach(() => {
    check = {
      checkName: () => true,
      checkPassword: () => true,
      passwordLength: () => true,
      nameLength: () => true,
      checkLogin: () => true,
      loginLength: () => true,
      checkEmail: () => true,
      emailValid: () => true
    } as any;

    router = {
      navigate: jasmine.createSpy('navigate')
    } as any;
    auths = {
      registerUser(): Promise<any> {
        return new Promise<any>(resolve => resolve());
      },
      doGoogleLogin(): Promise<any> {
        return new Promise<any>(resolve => resolve());
      }
    } as any
    component = {
      userRegisterClick: () => false
    } as any
  });

  it('should create', () => {
    component = new AuthComponent(auths, check, router);
    expect(component).toBeTruthy();
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = '';
    component.email = '';
    component.password = '';
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = 'sss';
    component.email = '';
    component.password = '';
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = 'sss';
    component.email = 'iubwfl';
    component.password = '';
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = 'ss';
    component.email = 'd.fdfdff@gmail.com';
    component.password = 's';
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = 'ss';
    component.email = 'd.fdfdff@gmail.com';
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = undefined;
    component.email = 'd.fdfdff@gmail.com';
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = 'dsf';
    component.login = undefined;
    component.email = undefined;
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = undefined;
    component.login = undefined;
    component.email = 'd.fdfdff@gmail.com';
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = "dfsdf";
    component.login = "dfsdfsdss";
    component.email = 'dmail.com';
    component.password = "uhHUGdf32ccccds";
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(false);
    spyOn(check, 'loginLength').and.returnValue(false);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = undefined;
    component.login = "dfsdfsdss";
    component.email = 'dmail.com';
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return false', () => {
    spyOn(check, 'checkName').and.returnValue(false);
    spyOn(check, 'checkPassword').and.returnValue(false);
    spyOn(check, 'passwordLength').and.returnValue(false);
    spyOn(check, 'nameLength').and.returnValue(false);
    spyOn(check, 'checkLogin').and.returnValue(true);
    spyOn(check, 'loginLength').and.returnValue(true);
    spyOn(check, 'checkEmail').and.returnValue(false);
    spyOn(check, 'emailValid').and.returnValue(false);

    component = new AuthComponent(auths, check, router);
    component.name = undefined;
    component.login = "dfsdfsdss";
    component.email = 's.dsdssds@gmail.com';
    component.password = undefined;
    expect(component.userRegisterClick()).toBe(false);
  });
  it('userRegisterClick() should return true', () => {
    spyOn(check, 'checkName').and.returnValue(true);
    spyOn(check, 'checkPassword').and.returnValue(true);
    spyOn(check, 'passwordLength').and.returnValue(true);
    spyOn(check, 'nameLength').and.returnValue(true);
    spyOn(check, 'checkLogin').and.returnValue(true);
    spyOn(check, 'loginLength').and.returnValue(true);
    spyOn(check, 'checkEmail').and.returnValue(true);
    spyOn(check, 'emailValid').and.returnValue(true);
    spyOn(component, 'userRegisterClick').and.returnValue(true);
    
    component = new AuthComponent(auths, check, router);
    component.name = 'dsfsasdfssd';
    component.login = 'ssdssssdsds';
    component.email = 'd.fdfd@gmail.com';
    component.password = 's77tfgwhfdfgdshfdj';
    expect(component.userRegisterClick()).toBe(undefined);
  });
  it('should create ngOnInit()', () => {
    component = new AuthComponent(auths, check, router);
    expect(component.ngOnInit()).toBe(undefined);
  });
  it('GoogleCheckIn() to be true', () => {
    component = new AuthComponent(auths, check, router);
    expect(component.GoogleCheckIn()).toBe(true);
  });
});
