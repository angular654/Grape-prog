import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Article } from '../home/article';
import { ImageUpload } from './Image';
import { UploadImageService } from '../upload-image.service';

import * as moment from 'moment';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: ImageUpload;

  article: Article = new Article();
  image: ImageUpload;
  articleContent: Observable<any[]>;
  imagesContent: Observable<any[]>;
  submitted: boolean = false;
  msgdate: any;
  imgUrl: any;

  constructor(public db: AngularFireDatabase, private uploadService: UploadImageService) {
  }
  ngOnInit() {
    this.imagesContent = this.db.list('images').valueChanges();  
    this.articleContent = this.db.list('artContent').valueChanges();
  }
  createArticle() {
    console.clear();
    return this.submitted = true;
  }
  checkArticle() {
    console.clear();
    return this.submitted = false;
  }
  onSubmit() {
    if ((this.article.title == undefined || this.article.category == undefined || this.article.content == undefined || this.article.refs == undefined) &&
      !(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi.test(this.article.refs))) {
      alert('Некорректные данные');
      return false;
    } else {
      this.msgdate = moment().format('LLL');
      this.upload()
      this.db.list('artContent').push({ content: this.article.title + '🍇' + this.article.category + '🍇' + this.article.content + '🍇' + this.msgdate + '🍇' + this.article.refs + '🍇' });
      alert('Статья опубликована');
      this.article.title = this.article.category = this.article.content = this.article.refs = this.article.image = undefined;
      console.log('%c You create article🍇', 'font-size: 36px; font-weight: bold');
      return true;
    }
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new ImageUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      error => {
        console.log(error);
      }
    );

  }
}
