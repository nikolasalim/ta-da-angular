import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { UIService } from '../../services/ui.service';
import { Subject } from 'rxjs';

@Directive({
  selector: '[closeOnClickout]'
})
export class CloseOnClickoutDirective implements OnInit, AfterViewInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private static currentDirective: CloseOnClickoutDirective;

  @Output() clickedOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event.target'])
  onClick(target: EventTarget) {
    if (target !== this.elRef.nativeElement && !this.elRef.nativeElement.contains(target) && !this.elRef.nativeElement.contains(document.activeElement)) {
      this.clickedOutside.emit(); 
      this.destroy$.next();
    }
  }

  constructor(
    public elRef: ElementRef,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.uiService.handleClickoutDirectives(this);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
