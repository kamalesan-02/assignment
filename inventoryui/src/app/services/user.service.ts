import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static USER_REGISTRATION_URL ="http://localhost:3000/user/create";
  constructor(private http: HttpClient) { }

  registerUser(userInfo: any): Observable<any>{
    return this.http.post(UserService.USER_REGISTRATION_URL,userInfo);
  }
}
