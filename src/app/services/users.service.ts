import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  uploadpic(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/upload', data);
  }


  registerUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/', data);
  }


  updateUser(id:any,data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/'+id, data);
  }

  getUser(id:any):Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/single/'+id);
  }

  getAdmin(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/users/admin/',data)
  }

  getUsers():Observable<any> {
    return this.http.get<any>('http://localhost:3000/users');
  }

  delUser(id:any):Observable<any> {
    return this.http.delete<any>('http://localhost:3000/users/'+id);
  }

  constructor( private http: HttpClient) { }
}
