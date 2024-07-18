import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserLogin {
  username:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  /**
   * @description login user
   * @param {string} user  - user (username && password)
   */

  loginSubmission(username: string):Observable <UserLogin[]> {
    return this.http.get<UserLogin[]>(`${this.apiBaseUrl}?username=${username}`);
  }

}
