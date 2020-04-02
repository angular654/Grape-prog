import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article-service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(public articleService: ArticleService) { }
  articles: any;
  ngOnInit() {
    this.getArticlesList();
  }
  getArticlesList() {
    this.articleService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(articles => {
      this.articles = articles;
    });
  }
 
  deleteCustomers() {
    this.articleService.deleteAll();
  }
 
}
