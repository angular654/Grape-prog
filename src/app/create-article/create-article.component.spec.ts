import { CreateArticleComponent } from './create-article.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let db: AngularFireDatabase;
  beforeEach(() =>{
    db = {
      list(n:string){
        return{
          valueChanges: () => of([]),
          push:(data: any) => {}
        };
      }
    } as any;
  })
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
  it('onSubmit() should return true', () => {
    component = new CreateArticleComponent(db);
    component.article.title = "Title";
    component.article.content = "Some content";
    component.article.category ="category";
    component.article.refs = "https://grape-proger.000webhostapp.com/";
    expect(component.onSubmit()).toBe(true);
  });
});
