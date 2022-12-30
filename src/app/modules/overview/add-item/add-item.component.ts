import { Component, ElementRef, OnInit, QueryList, ViewChildren, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TitleInputComponent } from 'src/app/shared/title-input/title-input.component';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  showInput = false;
  itemInput: FormControl = new FormControl('', Validators.required);
  @ViewChildren('input') inputRef: QueryList<ElementRef>;
  @ViewChild('titleInput') titleInputComponent: TitleInputComponent;

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
  }

  toggleAdd():void {
    this.showInput = !this.showInput;
  }

  addItem(inputControl: FormControl):void {
    if (inputControl.valid) {
      this.overviewService.addItem(inputControl.value)
        .subscribe(() => this.titleInputComponent.titleCtrl.reset())
    } else {
      // TODO validation error message
      this.itemInput.markAllAsTouched
    }
  }

}
