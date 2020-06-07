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
  constructor( public db: AngularFireDatabase) {
   }
  ngOnInit() {
    this.articleContent = this.db.list('artContent').valueChanges();
  }
  createArticle(){
    //this.submitted = true;
    console.clear();
    return this.submitted = true;
  }
  checkArticle(){
    //this.submitted = false;
    console.clear();
    return this.submitted = false;
  }
  onSubmit() {
      if ((this.article.title==undefined||this.article.category==undefined||this.article.content==undefined||this.article.refs == undefined)&&
      !(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi.test(this.article.refs))){
        alert('Некорректные данные');
        return false;
      } else {
        this.msgdate = moment().format('LLL'); 
        this.db.list('artContent').push({ content: this.article.title + '🍇' + this.article.category + '🍇' + this.article.content + '🍇'  + this.msgdate + '🍇' + this.article.refs });
        alert('Статья опубликована');
        this.article.title = this.article.category = this.article.content = this.article.refs = undefined;
        console.log('%c You create article🍇', 'font-size: 36px; font-weight: bold');
        return true;
      }
    }
}
