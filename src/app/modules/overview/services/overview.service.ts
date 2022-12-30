import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, tap, switchMap, withLatestFrom, take } from 'rxjs';
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
    return this.overviewRestService.addItem({title: newItemTitle, status: ItemStatus.Open})
      .pipe(
        withLatestFrom(this.items$),
        tap(([newItem, currentItems]) => this._items.next([...currentItems, newItem]))
      );
  }

  removeItem(id: number){     
    return this.overviewRestService.removeItem(id)
      .pipe(
        switchMap(() => this.items$.pipe(
          take(1),
          tap(items => {
            const updatedItems = items.filter(item => item.id !== id)
            this._items.next(updatedItems)
          })
        )
      ))
  }

  editItem(item:IItem): Observable<IItem[]> {
    return this.overviewRestService.editItem(item)
      .pipe(
        switchMap(updatedItem => this.items$.pipe(
          take(1),
          tap(currentItems => {
            const updatedItems = currentItems.map(item => item.id === updatedItem.id ? updatedItem : item);
            this._items.next(updatedItems);
          })
        ))
      )
  }
}
