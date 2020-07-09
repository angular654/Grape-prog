import { UploadImageService } from './upload-image.service';
import { FirebaseService } from './firebase.service'
import { ImageUpload } from '../app/create-article/Image'
import { of, Observable } from 'rxjs';
describe('UploadImageService', () => {
  let service: UploadImageService;
  let fs: FirebaseService;
  let image : ImageUpload;
  beforeEach(() => {
    fs = {
      list(n: string) {
        return {
          valueChanges: () => of([]),
          push: (data: any) => { }
        };
      },
      getRef(){
        return String
      },
      uploadFile(path,file:File){
        return path + file
      },
      changes(): Observable<any>{
       return new Observable
      },
      uploadTask() {
        return {
          percentageChanges(): Observable<number>{
            return new Observable
          }
        }
      }
    } as any
    image = {
      url : '',
      name: 'image',
      file : new File(["foo"], "foo.txt", {
        type: "text/plain",
      })
    } as any
    service = new UploadImageService(fs)
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(service.basePath).toEqual('/images');
  });
  it('pushFileToStorage() should used', () => {
    expect(service.pushFileToStorage(image)).toBeTruthy()
  });
});
