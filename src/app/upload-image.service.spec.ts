import { UploadImageService } from './upload-image.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ImageUpload} from '../app/create-article/Image'
import { of } from 'rxjs';
describe('UploadImageService', () => {
  let service: UploadImageService;
  let db: AngularFireDatabase;
  let storage: AngularFireStorage
  let image : ImageUpload
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
  it('pushFileToStorage(image) should used', () => {
    service = new UploadImageService(db, storage)
    expect(service.pushFileToStorage(image)).toBeTruthy()
  });
});
