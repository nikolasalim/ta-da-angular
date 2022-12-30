import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ItemStatus } from 'src/app/models';

@Component({
  selector: 'app-status-input',
  templateUrl: './status-input.component.html',
  styleUrls: ['./status-input.component.scss']
})
export class StatusInputComponent implements OnInit {

  statusOptions: {label: string, value: ItemStatus}[]
  statusCtrl: FormControl<any> = new FormControl(null, Validators.required);
  statusMapping = {
    [ItemStatus.Open]: 'Open',
    [ItemStatus.Resolved]: 'Resolved',
    [ItemStatus.OnHold]: 'On Hold'
  }
  @Input() initialStatus: ItemStatus;
  @Output() updateStatus = new EventEmitter<FormControl>;

  constructor() { }

  ngOnInit(): void {
    this.statusOptions = Object.values(ItemStatus).map(status => {
      return {label: this.statusMapping[status], value: status}
    });
    this.statusCtrl.setValue(this.initialStatus);
    this.statusCtrl.valueChanges.subscribe(() => this.updateStatus.emit(this.statusCtrl));
  }

}
