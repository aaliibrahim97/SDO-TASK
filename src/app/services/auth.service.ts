import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface UserLogin {
  username:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  /**
   * @description login user
   * @param {string} user  - user (username)
   */

  loginSubmission(username: string):Observable <UserLogin[]> {
    return this.http.get<UserLogin[]>(`${environment.apiBaseUrl}?username=${username}`);
  }

}
