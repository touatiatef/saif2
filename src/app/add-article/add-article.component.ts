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
  selectedFileFace!: File;
  selectedFileProfile!: File;
  constructor(private service: ArticleServiceService,private service2:ProviderService, private router : Router) { }
 //Gets called when the user selects an image
 public onFileFaceChanged(event:any) {
  //Select File
  this.selectedFileFace = event.target.files[0];
  this.selectedFileProfile = event.target.files[1];
  //console.log(this.selectedFile);
}

// //Gets called when the user selects an image
// public onFileProfileChanged(event:any) {
//   //Select File
//   this.selectedFileProfile = event.target.files[0];
//   //console.log(this.selectedFile);
// }
  ngOnInit() {
    this.service2.listProviders().subscribe(
      data =>{
         this.providers = data;
         console.log(this.providers);
      }
    );
  }
  // createArticle(myform:any) {
  //   this.service.createArticle(myform).subscribe( 
  //    response => { console.log(response); 
  //      this.router.navigate(['listArticle']);
  //    } ); 
  //     }

  createArticle(myform:any) {
    const art = new FormData();
    

    art.append('providerId', myform.value.providerId);
    art.append('label', myform.value.articleLabel);
    art.append('price', myform.value.articlePrice);
    art.append('imageFace', this.selectedFileFace,this.selectedFileFace.name);
    art.append('imageProfile', this.selectedFileProfile,this.selectedFileProfile.name);

    
    
    this.service.createArticle(art,myform.value.providerId).subscribe(
      response => {
        //console.log(response);
        // forcer la redirection que si j'obtient la réponse du serveur backend
        this.router.navigate(['listArticle']);
      }
    );
  }

}
