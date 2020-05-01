import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Article } from '../home/article';
import * as moment from 'moment';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article: Article = new Article();
  articleContent : Observable<any[]>;
  submitted : boolean = false;
  msgdate: any;

  constructor( private db: AngularFireDatabase) {
    this.articleContent = db.list('artContent').valueChanges();
   }
  ngOnInit() {
  }
  createArticle(){
    this.submitted = true;
    console.clear();
  }
  checkArticle(){
    this.submitted = false;
    console.clear();
  }
  onSubmit() {
    if (this.article.title==undefined||this.article.category==undefined||this.article.content==undefined){
      alert('Некоректные данные');
    } else {
      this.msgdate = moment().format('LLL'); 
      this.db.list('artContent').push({ content: this.article.title + '🍇' + this.article.category + '🍇' + this.article.content + '🍇' + this.msgdate});
      alert('Статья опубликована');
      console.log('%c You create article🍇', 'font-size: 36px; font-weight: bold');
    }
  }
}
