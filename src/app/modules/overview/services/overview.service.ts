import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, tap } from 'rxjs';
import { IItem } from 'src/app/models';
import { OverviewRestService } from './overview-rest.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(
    private overviewRestService: OverviewRestService
  ) { }

  private _items: BehaviorSubject<IItem[] | null> = new BehaviorSubject<IItem[] | null>(null)
  public items$: Observable<IItem[] | null> = this._items.asObservable().pipe(distinctUntilChanged())

  getItems(): Observable<IItem[] | null> {
    return this.overviewRestService.getItems()
      .pipe(tap(items => this._items.next(items)))
  }
}
