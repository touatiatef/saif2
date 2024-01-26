import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleServiceService } from '../services/article-service.service';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  article: any;
  providers: any;
  providerId: any;
  constructor(private service: ArticleServiceService,private service2:ProviderService, private router : Router) { }

  ngOnInit() {
    this.service2.listProviders().subscribe(
      data =>{
         this.providers = data;
         console.log(this.providers);
      }
    );
  }
  createArticle(myform:any) {
    this.service.createArticle(myform).subscribe( 
     response => { console.log(response); 
       this.router.navigate(['listArticle']);
     } ); 
      }
}
