import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss']
})
export class TitleInputComponent implements OnInit, AfterViewInit {

  titleCtrl: FormControl = new FormControl('', Validators.required);
  @ViewChild('input') inputRef: ElementRef;
  @Input() initialValue: string;
  @Output() confirmEvent = new EventEmitter<FormControl>();

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    if (this.initialValue) {
      this.titleCtrl.setValue(this.initialValue);
    }
  }

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  confirm() {
    this.confirmEvent.emit(this.titleCtrl);
  }

  cancel() {
    this.titleCtrl.reset();
  }

}
