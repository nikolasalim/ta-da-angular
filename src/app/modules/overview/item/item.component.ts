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

  toggleEditTitle(): void {
    this.showEditTitle = !this.showEditTitle; 
  }

  editTitle(titleCtrl: FormControl, currentItem: IItem){
    if(titleCtrl.valid){
      const updatedItem = {...currentItem, title: titleCtrl.value}
      this.overviewService.editItem(updatedItem)
        .subscribe(() => this.showEditTitle = false);
    } else {
      titleCtrl.markAsTouched();
    }
  }

  editStatus(statusCtrl: FormControl, currentItem: IItem){
    const updatedItem = {...currentItem, status: statusCtrl.value}
    this.overviewService.editItem(updatedItem).subscribe();
  }

  removeItem(id: number | undefined){
    if (id){
      this.overviewService.removeItem(id)
        .subscribe();
    }
  }

}