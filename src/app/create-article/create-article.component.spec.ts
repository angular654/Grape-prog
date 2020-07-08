import { CreateArticleComponent } from './create-article.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import * as moment from 'moment';
import { UploadImageService } from '../upload-image.service';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let db: AngularFireDatabase;
  let upS: UploadImageService; 
  beforeEach(() => {
    db = {
      list(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      }
    } as any;
    upS = {
      upload:() => true,
      item(file): File{
        return file
      },
    } as any
  })
  it('should create', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component).toBeTruthy();
  });
  it('submitted should be  false', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.submitted).toBe(false);
  });
  it('createArticle() should return true', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.createArticle()).toBe(true);
  });
  it('checkArticle() should return false', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.checkArticle()).toBe(false);
  });
  it('onSubmit() should return false', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.onSubmit()).toBe(false);
  });
  it('onSubmit() should return true', () => {
    component = new CreateArticleComponent(db,upS);
    component.article.title = "Title";
    component.article.content = "Some content";
    component.article.category = "category";
    component.article.refs = "https://grape-proger.000webhostapp.com/";
    expect(component.onSubmit()).toBe(true);
  });
  it('ngOnInint should used', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.ngOnInit()).toBe(undefined);
  });
  it('selectFile() should used', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.selectFile(event)).toBe(undefined);
  });
  it('upload() should return true', () => {
    component = new CreateArticleComponent(db,upS);
    expect(component.upload()).toBeTruthy();
  });
});
