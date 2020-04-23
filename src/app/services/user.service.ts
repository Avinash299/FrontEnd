import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3001/api/users/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }
    get(): Observable<any> {
        return this.http.get(AUTH_API + 'get', httpOptions);
    }

    save(user, id): Observable<any> {
        if (id)
            return this.http.put(AUTH_API + 'update/' + id, user, httpOptions);
        else
            return this.http.post(AUTH_API + 'signup', user, httpOptions);
    }
    getUserById(id): Observable<any> {
        return this.http.get(AUTH_API + 'get/' + id, httpOptions);
    }
    deleteUser(id):Observable<any> {
        return this.http.delete(AUTH_API + 'delete/' + id, httpOptions);
    }
    activeDeactive(id,value):Observable<any> {
        return this.http.get(AUTH_API + 'active/'+id+"/"+value, httpOptions);
    }
}
