import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, tap, map } from 'rxjs';
import { IItem, ItemStatus } from 'src/app/models';
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

  addItem(newItemTitle: string) {
        let items = this._items.getValue();
        return this.overviewRestService.addItem({title: newItemTitle, status: ItemStatus.OPEN})
          .pipe(tap(item => {
            if (items){
              items = [...items, item]
              this._items.next(items)
            }
          }));
  }
}
