import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class OverviewRestService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('http://localhost:3000/todoItems');
  }

  addItem(item: IItem): Observable<IItem> {
    return this.http.post<IItem>('http://localhost:3000/todoItems', item);
  }

  removeItem(id: number): Observable<IItem> {
    return this.http.delete<IItem>(`http://localhost:3000/todoItems/${id}`);
  }

  editItem(item: IItem): Observable<IItem> {
    return this.http.put<IItem>(`http://localhost:3000/todoItems/${item.id}`, item);
  }
}
