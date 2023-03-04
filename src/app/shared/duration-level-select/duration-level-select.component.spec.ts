import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationLevelSelectComponent } from './duration-level-select.component';

describe('DurationLevelSelectComponent', () => {
  let component: DurationLevelSelectComponent;
  let fixture: ComponentFixture<DurationLevelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationLevelSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationLevelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
