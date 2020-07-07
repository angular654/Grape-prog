import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Article } from '../home/article';
import { ImageUpload } from './Image';
import { UploadImageService } from '../upload-image.service';
import { Observable } from 'rxjs';

import * as moment from 'moment';
import {map, combineLatest} from 'rxjs/operators'
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
  ref: 'artContent'
  constructor(public db: AngularFireDatabase, private uploadService: UploadImageService) {
  }
  ngOnInit() {
    this.articleContent = this.db.list('artContent').valueChanges();
    this.imagesContent = this.db.list('images').valueChanges();
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
      //this.upload()
     // this.article.image = 'https://firebasestorage.googleapis.com/v0/b/grapeprogchatapp.appspot.com/o/images%2Fgithub-octocat.png?alt=media&token=3bf16861-ce0c-45f2-956e-96098e62e478';
      this.db.list('artContent').push({
        title: this.article.title,
        category: this.article.category,
        content: this.article.content,
        date: this.msgdate,
        refs: this.article.refs,
        url: this.article.image
      }).then((snapshot) => {
        console.warn(snapshot.key)
      });
      this.upload()
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
