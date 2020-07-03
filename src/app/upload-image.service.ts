import { Injectable } from '@angular/core';
import { ImageUpload } from '../app/create-article/Image'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  basePath = '/images'
  storageRef: any;
  imgref: any;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }
  pushFileToStorage(fileUpload: ImageUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    this.storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        this.storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          this.imgref = downloadURL;
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: ImageUpload) {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<ImageUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: ImageUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
