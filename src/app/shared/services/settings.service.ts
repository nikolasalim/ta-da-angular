import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { IDurationLevel } from 'src/app/models';

@Injectable({providedIn: 'root'})
export class SettingsService {

  private _settings: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public settings$: Observable<any> = this._settings.asObservable().pipe(distinctUntilChanged())

  constructor(
    private http: HttpClient
  ) {
    this.setSettings();
  }

  setSettings(){
    return this.http.get<IDurationLevel[]>('http://localhost:3000/settings')
      .pipe(tap(settings => this._settings.next(settings)))
      .subscribe()
  }

  getDurationLevels(): Observable<IDurationLevel[]>{
    return this.settings$.pipe(map(settings => settings.durationLevels));
  }
  
}