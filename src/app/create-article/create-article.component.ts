import { Component, OnInit } from '@angular/core';
import { Article } from '../home/article';
import { ArticleInterface } from '../home/articleInterface';
import { ImageUpload } from './Image';
import { UploadImageService } from '../upload-image.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

import * as moment from 'moment';
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
  constructor(public fire: FirebaseService, private uploadService: UploadImageService) {
  }
  ngOnInit() {
    this.articleContent = this.fire.createlist('artContent').valueChanges();
  }
  createArticle() {
    return this.submitted = true;
  }
  checkArticle() {
    return this.submitted = false;
  }
  onSubmit() {
    this.article.published = moment().format('LLL')
    this.article.image = 'https://firebasestorage.googleapis.com/v0/b/grapeprogchatapp.appspot.com/o/images%2F%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?alt=media&token=f356c51e-b928-4025-8c2f-e7367d8a917b';
    const articleContent: ArticleInterface = {
         category: this.article.category,
         refs: this.article.refs,
         content: this.article.content,
         image: this.article.image,
         published: this.article.published,
         title: this.article.title
    }
    if ((this.article.title == undefined || this.article.category == undefined || this.article.content == undefined || this.article.refs == undefined) &&
      !(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi.test(this.article.refs))) {
      alert('Некорректные данные');
      return false;
    } else {
      this.msgdate = moment().format('LLL');
      this.fire.create('artContent',articleContent)
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
