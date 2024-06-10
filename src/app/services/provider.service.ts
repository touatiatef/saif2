import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
 // urlProviders = 'http://127.0.0.1:8080/providers';
  urlProviders = environment.baseUrl+'providers'
  provider: any;
  constructor(private Http: HttpClient) { }
  token:any = sessionStorage.getItem('jwtToken');
  
   listProviders() { 
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    return this.Http.get(this.urlProviders,{headers});
   }
  // createProvider(myform: any) {
  //   this.provider = {
  //     'name': myform.value.providerName,
  //     'email': myform.value.providerEmail,
  //     'address': myform.value.providerAdress
  //   };
  //   return this.Http.post(this.urlProviders , this.provider);
  // }
  createProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    headers.append('Content-Type', 'multipart/form-data');
    return this.Http.post(this.urlProviders, provider, { headers });
  }

  updateProvider(myObj: any) {// second step for update
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    const options = { headers: headers, body: myObj };
     return this.Http.put(this.urlProviders + '/' + myObj['id'],options); 
    }
  deleteProvider(myObj: any) { 
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    const options = { headers: headers, body: myObj };
    return this.Http.delete(this.urlProviders + '/' + myObj['id'], options) 
   }
  getProvider(id: any) { // first step for update
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    return this.Http.get(this.urlProviders + '/' + id, { headers }) 
  }
}

