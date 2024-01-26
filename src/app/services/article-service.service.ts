import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  urlArticles = 'http://127.0.0.1:8080/articles';
  article: any;
  constructor(private Http: HttpClient) { }

  listArticles() { return this.Http.get(this.urlArticles); }

  createArticle(myform: any) {
    this.article = {
      'label': myform.value.articleLabel,
      'price': myform.value.articlePrice,
      'picture': myform.value.articlePicture
    };
    return this.Http.post(this.urlArticles + "/" + myform.value.providerId, this.article);
  }

  deleteArticle(myObj: any) { return this.Http.delete(this.urlArticles + '/' + myObj['id'], myObj) }
  updateArticle(myObj: any, providerId: any) { return this.Http.put(this.urlArticles + "/" + providerId + '/' + myObj['id'], myObj); }
  getArticle(id: any) { return this.Http.get(this.urlArticles + '/' + id) }
}
