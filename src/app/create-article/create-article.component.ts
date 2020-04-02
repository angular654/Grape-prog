import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { Article } from '../home/article';
import { ArticleService } from '../article-service.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.article = new Article();
  }
 
  save() {
    this.articleService.createCustomer(this.article);
    this.article = new Article();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
