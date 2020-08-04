import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  getItems():Observable<any> {
    return this.http.get<any>('https://aksh-api-restaurent.herokuapp.com/items');
  }

  uploadpic(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/items/upload', data);
  }

  registerItem(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/items/', data);
  }

  delItem(id:any):Observable<any> {
    return this.http.delete<any>('https://aksh-api-restaurent.herokuapp.com/items/'+id);
  }

  constructor(private http: HttpClient) { }
}

