import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleComponent } from './create-article.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let fixture: ComponentFixture<CreateArticleComponent>;

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue('data')
  }
  
  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ CreateArticleComponent ],
      providers: [{provide:AngularFireDatabase, useValue:angularFiresotreStub}]
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
