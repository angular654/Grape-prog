import { UploadImageService } from './upload-image.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUpload } from '../app/create-article/Image'
import { of, Observable } from 'rxjs';

describe('UploadImageService', () => {
  let service: UploadImageService;
  let db: AngularFireDatabase;
  let storage: AngularFireStorage;
  let image : ImageUpload;
  beforeEach(() => {
    db = {
      list(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      },
    } as any
    storage = {
      ref(str: string) {
        return str
      },
      upload(): void {
      },
      snapshotChanges(): Observable<any> {
        return new Observable
      }
    } as any
    image = {
      url: '',
      name: 'image',
      file: new File(["foo"], "foo.txt", {
        type: "text/plain",
      }),
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
  it('pushFileToStorage() should used', () => {
    service = new UploadImageService(db, storage)
    expect(service.pushFileToStorage(image)).toBeTruthy()
  });
});
