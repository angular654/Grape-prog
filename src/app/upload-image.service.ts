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
  pushFileToStorage(image: ImageUpload): Observable<number> {
    const filePath = `${this.basePath}/${image.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, image.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('Файл доступен :' , downloadURL);
          image.url = downloadURL;
          image.name = image.file.name;
          this.saveFileData(image);
        });
      })
    )
    return uploadTask.percentageChanges();
  }

  private saveFileData(image: ImageUpload) {
    this.db.list(this.basePath).push(image);
  }
}
