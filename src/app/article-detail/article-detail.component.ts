import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article-service.service';
import { Article } from '../home/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  constructor(private articleService: ArticleService ) {
   }
    
  ngOnInit() {
  }
  updateActive(isActive: boolean) {
    this.articleService
      .updateCustomer(this.article.key, { active: isActive })
      .catch(err => console.log(err));

  }
 
  deleteCustomer() {
    this.articleService
      .deleteCustomer(this.article.key)
      .catch(err => console.log(err));
  }

}
