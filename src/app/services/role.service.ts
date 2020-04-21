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
export class RoleService {

  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(AUTH_API + 'role/get',httpOptions);
  }

  add(role): Observable<any> {
    return this.http.post(AUTH_API + 'role/add',role, httpOptions);
  }
  getRoleById(id): Observable<any> {
    return this.http.get(AUTH_API + 'role/get/'+id,httpOptions);
  }
}
