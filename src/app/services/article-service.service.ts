import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  urlArticles = environment.baseUrl+'articles';
  article: any;
  constructor(private Http: HttpClient) { }

  listArticles() { return this.Http.get(this.urlArticles); }

  // createArticle(myform: any) {
  //   this.article = {
  //     'label': myform.value.articleLabel,
  //     'price': myform.value.articlePrice,
  //     'picture': myform.value.articlePicture
  //   };
  //   return this.Http.post(this.urlArticles + "/" + myform.value.providerId, this.article);
  // }

  createArticle(art: any,providerId:any) {
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.Http.post(this.urlArticles+ '/' + providerId, art, { headers });

  }

  updateArticle(myObj: any,providerId:any,id:any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.Http.put(this.urlArticles + '/' + providerId+ '/' + id, myObj);
    //return this.Http.put(this.urlArticles + '/' + myObj['providerId']+ '/' + myObj['id'], myObj);
  }

  deleteArticle(myObj: any) { return this.Http.delete(this.urlArticles + '/' + myObj['id'], myObj) }
  //updateArticle(myObj: any, providerId: any) { return this.Http.put(this.urlArticles + "/" + providerId + '/' + myObj['id'], myObj); }
  getArticle(id: any) { return this.Http.get(this.urlArticles + '/' + id) }
}
