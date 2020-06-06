import { fakeAsync,async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleComponent } from './create-article.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let db: AngularFireDatabase
 
  it('should create', () => {
    component = new CreateArticleComponent(db);
    component.ngOnInit()
    expect(component).toBeTruthy();
  });
});
