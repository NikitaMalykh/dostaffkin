import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryApi {
  constructor(private http: HttpClient) { }

  createDelivery(payload: any): Observable<any> {
    return this.http
      .post<any>('http://localhost:3000/api/orders', payload)
      .pipe(
        catchError((err) =>
          of({ error: err?.error?.error ?? 'Ошибка при создании заявки' })
        )
      );
  }

  getDeliveryInfo(id: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:3000/api/orders/${id}`)
      .pipe(
        catchError((err) =>
          of({ error: err?.error?.error ?? 'Ошибка при получении статуса' })
        )
      );
  }

}