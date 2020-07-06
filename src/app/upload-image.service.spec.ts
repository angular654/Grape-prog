import { UploadImageService } from './upload-image.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { of } from 'rxjs';
import { ImageUpload } from './create-article/Image';
describe('UploadImageService', () => {
  let service: UploadImageService;
  let db: AngularFireDatabase;
  let storage: AngularFireStorage
  beforeEach(() => {
    db = {
      list(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      }
    } as any
    storage = {
     ref:() => String
    } as any
  }
  );

  it('should be created', () => {
    service = new UploadImageService(db, storage)
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    service = new UploadImageService(db, storage)
    expect(service.basePath).toEqual('/images');
  });
  it('should be created', () => {
    service = new UploadImageService(db, storage)
    expect(service.pushFileToStorage).toBe(Number)
  });
});
