import { Component } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  public urlUpload = environment.urlUploadImage;
  articles: any;
  constructor(private service: ArticleServiceService, private router :Router) {
    console.log("constructeur injecte Service HttpClient")
  }

  ngOnInit(): void {// ngOnInit chargement de composant
    this.refreshListArticles();
}

refreshListArticles() { 
  this.service.listArticles().subscribe( 
  response => { this.articles = response; }
   ); 
  }

  deleteArticle(myObj:any){ 
    this.service.deleteArticle(myObj).subscribe(
    response => { console.log(response);
       this.refreshListArticles(); }
    ) 
  }
  updateArticle(myObj:any) { 
    this.router.navigate(['updateArticle' + '/'+ myObj['id']]); //navigate to the component
    
}
}
