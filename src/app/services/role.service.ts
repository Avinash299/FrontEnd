import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3001/api/role/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get(AUTH_API + 'get', httpOptions);
  }

  save(role, id): Observable<any> {
    if (id)
      return this.http.put(AUTH_API + 'update/' + id, role, httpOptions);
    else
      return this.http.post(AUTH_API + 'add', role, httpOptions);
  }
  getRoleById(id): Observable<any> {
    return this.http.get(AUTH_API + 'get/' + id, httpOptions);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(AUTH_API + 'delete/' + id, httpOptions);
  }
  activeDeactive(id, value): Observable<any> {
    return this.http.get(AUTH_API + 'active/' + id + "/" + value, httpOptions);
  }
}
