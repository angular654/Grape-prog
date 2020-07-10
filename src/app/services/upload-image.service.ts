import { Injectable } from '@angular/core';
import { ImageUpload } from '../create-article/Image'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  basePath = '/images'
  constructor(private firedb: FirebaseService) {
  }
  pushFileToStorage(fileUpload: ImageUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.firedb.getRef(filePath);
    const uploadTask = this.firedb.uploadFile(filePath, fileUpload.file);

    this.firedb.changes(filePath, fileUpload.file).pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('Файл доступен :',downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe()
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: ImageUpload) {
    this.firedb.create(this.basePath,fileUpload);
  }
}
