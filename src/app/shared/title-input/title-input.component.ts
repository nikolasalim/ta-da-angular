import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss']
})
export class TitleInputComponent implements OnInit, AfterViewInit {

  titleInput: FormControl = new FormControl('', Validators.required);
  @ViewChild('input') inputRef: ElementRef;
  @Output() cancelEvent = new EventEmitter(); 
  @Output() confirmEvent = new EventEmitter<FormControl>(); 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  confirm(){
    this.confirmEvent.emit(this.titleInput);
  }

  cancel(){
    this.cancelEvent.emit();
    this.titleInput.reset();
  }

}
