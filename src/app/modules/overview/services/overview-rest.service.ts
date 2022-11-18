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

  getItems(): Observable<any> {
    return this.http.get<IItem[] | null>('http://localhost:3000/todoItems');
  }
}
