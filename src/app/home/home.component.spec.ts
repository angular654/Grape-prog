import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { AuthComponent } from '../auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { CheckFormService } from '../check-form-service.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let af: AuthService;
  let ac: AuthComponent;
  it('should create', () => {
    component = new HomeComponent(af,ac);
    expect(component).toBeTruthy();
  });
});
