import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleComponent } from './create-article.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let fixture: ComponentFixture<CreateArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AngularFireDatabase,
        AngularFireModule
      ],
      declarations: [ CreateArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    })
  }));

});
