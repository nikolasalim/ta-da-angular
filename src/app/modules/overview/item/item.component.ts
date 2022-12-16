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

  editTitle(titleInput: FormControl, currentItem: IItem){
    if(titleInput.valid){
      const updatedItem = {...currentItem, title: titleInput.value}
      this.overviewService.editItem(updatedItem)
        .subscribe(() => this.showEditTitle = false);
    } else {
      titleInput.markAsTouched();
    }
  }

  removeItem(id: number | undefined){
    if (id){
      this.overviewService.removeItem(id)
        .subscribe();
    }
  }

}