import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlRegistration = environment.baseUrl+'api/auth/signup';

  constructor(private Http: HttpClient) { }

  createUser(user: any) {
    return this.Http.post(this.urlRegistration, user);
  }
}