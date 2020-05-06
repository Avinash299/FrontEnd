import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3001/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }
  getUserHierarchy(): Observable<any> {
    return this.http.get(AUTH_API + 'users/hierarchy', httpOptions);
  }

}
