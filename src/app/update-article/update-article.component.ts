import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from '../services/article-service.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';

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
  public urlUpload = environment.urlUploadImage;
  selectedFileFace!: File;
  selectedFileProfile!: File;
  public nomOldImageFace = "";
  public nomNewImageFace = "";
  public nomOldImageProfile = "";
  public nomNewImageProfile = "";

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
    // this.articleToUpdate = this.serviceArticle.getArticle(this.id).subscribe(
    //   (response:any) => { //console.log(response); 
    //     this.label = response["label"];
    //     this.price = response["price"];
    //     this.picture = response["picture"];
    //     this.providerId= response["provider"].id ;
    //   }
    // );

    this.articleToUpdate = this.serviceArticle.getArticle(this.id).subscribe(
      (response: any) => {
        this.label =response["label"];
        this.price = response["price"];
        this.nomOldImageFace = response["imageFace"];
        this.nomOldImageProfile = response["imageProfile"];
        this.providerId=response["provider"].id;
      }
    );
  }

  //Gets called when the user selects an image
  public onFileFaceChanged(event: any) {
    //Select File
    if (event.target.files[0]) {
      this.selectedFileFace = event.target.files[0];
    }
  }

  public onFileProfileChanged(event: any) {
    //Select File
    if (event.target.files[0]) {
      this.selectedFileProfile = event.target.files[0];
    }
  }

//   updateArticle() {
//     this.articleToUpdate = { 
//      'label': this.label, 
//      'price': this.price, 
//      'picture': this.picture, 
//      'id': this.id }
//      this.serviceArticle.updateArticle(
//        this.articleToUpdate, this.providerId).subscribe(
//           response => { 
//            console.log(response); 
//            this.router.navigate(['listArticle']);
//          } 
         
//           );
          
// }


updateArticle() {
    
  const article = new FormData();
  if (this.selectedFileFace != null) {
    console.log("info :" + this.selectedFileFace)
    article.append('imageFace', this.selectedFileFace, this.selectedFileFace.name);
  }

  if (this.selectedFileProfile != null) {
    console.log("info :" + this.selectedFileProfile)
    article.append('imageProfile', this.selectedFileProfile, this.selectedFileProfile.name);
  }

  //provider.append('imageName',this.selectedFile.name);
  article.append('label', this.label);
  article.append('price', this.price);
  article.append('id', this.id);
  article.append('providerId', this.providerId);

  this.serviceArticle.updateArticle(article,this.providerId,this.id).subscribe(
    response => {
      this.router.navigate(['listArticle']);
    }
  );


}

}
