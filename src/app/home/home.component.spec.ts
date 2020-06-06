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
  let fixture: ComponentFixture<HomeComponent>;

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
    
    const collectionStub = {
      valueChanges: jasmine.createSpy('valueChanges').and.returnValue('data')
    }
    
    const angularFiresotreStub = {
      collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
    }
    
    TestBed.configureTestingModule({
      imports: [FormsModule,
      ],
      declarations: [ HomeComponent,CreateArticleComponent
      ],
      providers: [ AuthService,{provide:AngularFireAuth, useValue:afAuthStub},AuthComponent,
        CheckFormService,{provide:Router,useClass: class { navigate = jasmine.createSpy("navigate");}},
        {provide:AngularFireDatabase, useValue:angularFiresotreStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
