import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { UIService } from '../../services/ui.service';

@Directive({
  selector: '[closeOnClickout]'
})
export class CloseOnClickoutDirective implements OnInit {

  @Output() clickedOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event.target'])
  onClick(target: EventTarget) {
    if (target !== this.elRef.nativeElement && !this.elRef.nativeElement.contains(target) && !this.elRef.nativeElement.contains(document.activeElement)) {
      this.clickedOutside.emit();
    }
  }

  constructor(
    public elRef: ElementRef,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.uiService.handleClickoutDirectives(this);
  }

}
