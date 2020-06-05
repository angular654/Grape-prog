import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
      ],
      declarations: [ HomeComponent,CreateArticleComponent
      ],
      providers: [ AuthService,AngularFireAuth]
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
