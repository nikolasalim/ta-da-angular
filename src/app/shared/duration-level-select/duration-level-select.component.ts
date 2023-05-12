import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  durationLevelCtrl = new FormControl();
  selectionMode = false;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.durationLevelCtrl.setValue(this.selectedDurationLevel.colour);
  }

  submit(level: IDurationLevel){
    this.emitDurationLevel.emit(level);
    this.selectionMode = false;
  }

  toggleSelect(event: Event){
    event?.stopPropagation();
    this.selectionMode = !this.selectionMode;
    this.cd.detectChanges(); // makes sure that change detection gets picked up after the clickedOutside event is emitted
  }

}
