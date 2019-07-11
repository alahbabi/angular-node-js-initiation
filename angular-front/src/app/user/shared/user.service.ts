import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser : User = new User();
  users : User[];
  readonly baseUrl = 'http://localhost:3003/user';

  constructor(private http : HttpClient) { }

  postUser(userForm : User){
    return this.http.post(this.baseUrl, userForm);
  }

  getAllUsers(){
    return this.http.get(this.baseUrl + '/all');
  }
}
