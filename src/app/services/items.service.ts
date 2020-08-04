import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  getItems():Observable<any> {
    return this.http.get<any>('http://localhost:3000/items');
  }

  uploadpic(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/items/upload', data);
  }

  registerItem(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/items/', data);
  }

  delItem(id:any):Observable<any> {
    return this.http.delete<any>('http://localhost:3000/items/'+id);
  }

  constructor(private http: HttpClient) { }
}

