import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusInputComponent } from './status-input.component';

describe('StatusInputComponent', () => {
  let component: StatusInputComponent;
  let fixture: ComponentFixture<StatusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
