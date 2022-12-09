import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit, AfterViewInit {

  showInput = false;
  itemInput: FormControl = new FormControl('', Validators.required);
  @ViewChildren('input') inputRef: QueryList<ElementRef>;

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputRef.changes
    .subscribe((input: QueryList<ElementRef>) => {
      if (input.first) input.first.nativeElement.focus();
    });
  }

  toggleAdd():void {
    this.showInput = !this.showInput;
    this.itemInput.reset();
  }

  addItem():void {
    if (this.itemInput.valid) {
      this.overviewService.addItem(this.itemInput.value)
        .subscribe(() => {
          this.itemInput.reset();
          this.inputRef.notifyOnChanges()
        })
    } else {
      // TODO validation error message
      this.itemInput.markAllAsTouched
    }
  }

}
