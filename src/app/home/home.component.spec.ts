import { HomeComponent } from './home.component';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let ac: AuthComponent;
  let af: AuthService;
  component = new HomeComponent(af, ac);
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component.ngOnInit()).toBe(undefined);
  });
});
