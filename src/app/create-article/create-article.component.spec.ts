import { CreateArticleComponent } from './create-article.component';
import { FirebaseService } from '../services/firebase.service';
import { of } from 'rxjs';
import { UploadImageService } from '../services/upload-image.service';

describe('CreateArticleComponent', () => {
  let component: CreateArticleComponent;
  let fs: FirebaseService;
  let upS: UploadImageService; 
  beforeEach(() => {
    fs = {
      create(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      },
      createlist(){
        return {
          valueChanges: () => of([])
        };
      },
    } as any;
    upS = {
      
    } as any
    component = { 
      upload(){
        return {
          target(){
            return of([])
          },
        }
      },
      file: FileList[0],
      onSubmit(){
        return false
      }
    } as any
  })
  it('should create', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component).toBeTruthy();
  });
  it('submitted should be  false', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component.submitted).toBe(false);
  });
  it('createArticle() should return true', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component.createArticle()).toBe(true);
  });
  it('checkArticle() should return false', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component.checkArticle()).toBe(false);
  });
  it('onSubmit() should return false', () => {
    expect(component.onSubmit()).toBe(false);
  });
  it('onSubmit() should return true', () => {
    component = new CreateArticleComponent(fs,upS);
    component.title = "Title";
    component.content = "Some content";
    component.category = "category";
    component.refs = "https://grape-proger.com/";
    component.images = "image.png";
    expect(component.onSubmit()).toBe(true);
  });
  it('ngOnInint should used', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component.ngOnInit()).toBe(undefined);
  });
  it('selectFile() should used', () => {
    component = new CreateArticleComponent(fs,upS);
    expect(component.selectFile(event)).toBe(undefined);
  });
});
