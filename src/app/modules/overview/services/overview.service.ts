import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, tap, map, switchMap, merge, flatMap, withLatestFrom } from 'rxjs';
import { IItem, ItemStatus } from 'src/app/models';
import { OverviewRestService } from './overview-rest.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(
    private overviewRestService: OverviewRestService
  ) { }

  private _items: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([])
  public items$: Observable<IItem[]> = this._items.asObservable().pipe(distinctUntilChanged())

  getItems(): Observable<IItem[]> {
    return this.overviewRestService.getItems()
      .pipe(tap(items => this._items.next(items)))
  }

  addItem(newItemTitle: string){
    return this.overviewRestService.addItem({title: newItemTitle, status: ItemStatus.OPEN})
      .pipe(
        withLatestFrom(this.items$),
        tap(([newItem, currentItems]) => this._items.next([...currentItems, newItem]))
      );
  }
}
