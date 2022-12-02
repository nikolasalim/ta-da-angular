import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  showInput = false;
  itemInput: FormControl = new FormControl('', Validators.required)

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
  }

  addItem():void {
    if (this.itemInput.valid) {
      this.overviewService.addItem(this.itemInput.value).subscribe()
      this.showInput = false;
    } else {
      // TODO validation error message
      this.itemInput.markAllAsTouched;
    }
  }

  resetInput():void {
    this.showInput = false;
  }

}
