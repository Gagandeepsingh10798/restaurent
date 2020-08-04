import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  registerOrder(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/orders/', data);
  }


  getOrders():Observable<any> {
    return this.http.get<any>('http://localhost:3000/orders');
  }

  delOrder(id:any):Observable<any> {
    return this.http.delete<any>('http://localhost:3000/orders/'+id);
  }

  constructor(private http: HttpClient) { }
}
