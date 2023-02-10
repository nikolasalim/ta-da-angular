import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IDurationLevel } from 'src/app/models';

@Component({
  selector: 'app-duration-level-select',
  templateUrl: './duration-level-select.component.html',
  styleUrls: ['./duration-level-select.component.scss']
})
export class DurationLevelSelectComponent implements OnInit {

  @Input() selectedDurationLevel: IDurationLevel;
  @Input() durationLevels$: Observable<IDurationLevel[]>;
  @Output() emitDurationLevel = new EventEmitter<IDurationLevel>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(level: IDurationLevel){
    this.emitDurationLevel.emit(level);
  }

}
