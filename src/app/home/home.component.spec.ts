import { HomeComponent } from './home.component';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let ac: AuthComponent;
  let af: AuthService;
  it('should create', () => {
    component = new HomeComponent(af, ac);
    expect(component).toBeTruthy();
  });
});
