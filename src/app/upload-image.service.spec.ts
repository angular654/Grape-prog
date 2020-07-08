import { UploadImageService } from './upload-image.service';
import { FirebaseService } from './firebase.service'
import { ImageUpload } from '../app/create-article/Image'
import { of, Observable } from 'rxjs';

describe('UploadImageService', () => {
  let service: UploadImageService;
  let db: FirebaseService;
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
    service = new UploadImageService(db)
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    service = new UploadImageService(db)
    expect(service.basePath).toEqual('/images');
  });
  it('pushFileToStorage() should used', () => {
    service = new UploadImageService(db)
    expect(service.pushFileToStorage(image)).toBeTruthy()
  });
});
