import { Injectable } from '@angular/core';
import { ImageUpload } from '../app/create-article/Image'
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  basePath = '/images'
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }
  pushFileToStorage(fileUpload: ImageUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('Файл доступен :' , downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
          this.db.object('artContent/article/url').update(fileUpload)
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: ImageUpload) {
    this.db.list(this.basePath).push(fileUpload);
  }
}
