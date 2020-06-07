import { CreateArticleComponent } from './create-article.component';
import { AngularFireDatabase } from '@angular/fire/database';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let db: AngularFireDatabase;
  it('should create', () => {
    component = new CreateArticleComponent(db);
    expect(component).toBeTruthy();
  });
  it('submitted should be  false', () => {
    component = new CreateArticleComponent(db);
    expect(component.submitted).toBe(false);
  });
  it('createArticle() should return true', () => {
    component = new CreateArticleComponent(db);
    expect(component.createArticle()).toBe(true);
  });
  it('checkArticle() should return false', () => {
    component = new CreateArticleComponent(db);
    expect(component.checkArticle()).toBe(false);
  });
  it('onSubmit() should return false', () => {
    component = new CreateArticleComponent(db);
    expect(component.onSubmit()).toBe(false);
  });
});
