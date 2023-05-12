import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, filter, fromEvent, of, take } from 'rxjs';
import { CloseOnClickoutDirective } from '../directives/click-outside/click-outside.directive';


@Injectable({providedIn: 'root'})
export class UIService {

  public _activeClickOutside: BehaviorSubject<CloseOnClickoutDirective | null> = new BehaviorSubject<CloseOnClickoutDirective | null>(null);
  public activeClickOutside$: Observable<CloseOnClickoutDirective | null> = this._activeClickOutside.asObservable().pipe(distinctUntilChanged());
  
  constructor() { }

  handleClickoutDirectives(current: CloseOnClickoutDirective){
    const active = this._activeClickOutside.getValue();
    active?.clickedOutside.emit();
    this._activeClickOutside.next(current);
  }
  
}