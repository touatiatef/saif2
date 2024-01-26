import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from '../services/article-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-article',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-article.component.html',
  styleUrl: './update-article.component.css'
})
export class UpdateArticleComponent implements OnInit {
  
  public id:any;
  public articleToUpdate:any;
 public label:any;
  public price:any;
  public picture:any;
  public providerId:any;
  public providers:any;

  constructor(private router: Router, private route: ActivatedRoute, private serviceArticle: ArticleServiceService, private serviceProvider:ProviderService) { }
  //charger l'id a modifier 
ngOnInit(): void {
  this.serviceProvider.listProviders().subscribe(
    data =>{
       this.providers = data;
       console.log(this.providers);
    }
  );

    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
//charger l'objer a modifier 
    this.articleToUpdate = this.serviceArticle.getArticle(this.id).subscribe(
      (response:any) => { //console.log(response); 
        this.label = response["label"];
        this.price = response["price"];
        this.picture = response["picture"];
        this.providerId= response["provider"].id ;
      }
    );
  }
  updateArticle() {
    this.articleToUpdate = { 
     'label': this.label, 
     'price': this.price, 
     'picture': this.picture, 
     'id': this.id }
     this.serviceArticle.updateArticle(
       this.articleToUpdate, this.providerId).subscribe(
          response => { 
           console.log(response); 
           this.router.navigate(['listArticle']);
         } 
         
          );
          
}
}
