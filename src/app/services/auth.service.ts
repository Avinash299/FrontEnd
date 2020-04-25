import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storege.service';

const AUTH_API = 'http://localhost:3001/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private tokenService: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'users/login', {
      email: credentials.email,
      password: this.tokenService.encrypt(credentials.password)
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'users/signup', {
      username: user.username,
      email: user.email,
      password: this.tokenService.encrypt(user.password)
    }, httpOptions);
  }
}