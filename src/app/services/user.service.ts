import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../models/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = environment.UserApiUrl;
  constructor(private http: HttpClient) { 
    
  }

  getUsers()
  {
    return this.http.get(this.URL + 'api/users');
  }

  getUserById(userId)
  {
    return this.http.get(this.URL + `api/users/${userId}`);
  }

  putUserById(userId ,user){
    this.http.put(this.URL + `api/users/${userId}`, user)
  }
}
