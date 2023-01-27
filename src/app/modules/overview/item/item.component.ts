import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IItem } from 'src/app/models';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem
  showEditTitle = false;
  
  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
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

}