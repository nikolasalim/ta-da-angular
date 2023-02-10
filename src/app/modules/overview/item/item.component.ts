import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDurationLevel, IItem } from 'src/app/models';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem
  showEditTitle = false;
  durationLevels$: Observable<IDurationLevel[]>;

  constructor(
    private overviewService: OverviewService,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.durationLevels$ = this.settingsService.getDurationLevels();
  }

  // describe: toggleEditTitle
  toggleEditTitle(): void {
    this.showEditTitle = !this.showEditTitle; // it should toggle showEditTitle
  }

  // describe editTule
  editTitle(titleCtrl: FormControl, currentItem: IItem){
    if(titleCtrl.valid){ // describe: form submission successful
      const updatedItem = {...currentItem, title: titleCtrl.value}
      // describe: overviewService.editItem(updatedItem) is successful
      this.overviewService.editItem(updatedItem) // it should call overviewService.editItem
        .subscribe(() => this.showEditTitle = false); // it should set showEditTitle to false if success
    } else { // describe: form submission failed
      // it should not call overviewService.editItem
      titleCtrl.markAsTouched(); // it should mark titleCtrl as touched
    }
  }

  // describe: editStatus
  editStatus(statusCtrl: FormControl, currentItem: IItem){
    const updatedItem = {...currentItem, status: statusCtrl.value}
    // it should call overviewService.editItem with updatedItem
    this.overviewService.editItem(updatedItem).subscribe();
  }

  // describe: removeItem
  removeItem(id: number | undefined){
    // it should call overviewService.removeItem(id) with an id
    if (id){
      this.overviewService.removeItem(id)
        .subscribe();
    }
  }

  selectDurationLevel(durationLevel: IDurationLevel){
    console.log('call editItem with:', durationLevel);
  }

}