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

  getItem(id:any):Observable<any> {
    return this.http.get<any>('https://aksh-api-restaurent.herokuapp.com/items/'+id);
  }

  uploadpic(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/items/upload', data);
  }

  registerItem(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/items/', data);
  }

  updateItem(id:any,data: any): Observable<any> {
    return this.http.put<any>('https://aksh-api-restaurent.herokuapp.com/items/'+id, data);
  }


  delItem(id:any):Observable<any> {
    return this.http.delete<any>('https://aksh-api-restaurent.herokuapp.com/items/'+id);
  }

  constructor(private http: HttpClient) { }
}

