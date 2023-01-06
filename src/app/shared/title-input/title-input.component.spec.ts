import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TitleInputComponent } from './title-input.component';

describe('TitleInputComponent', () => {
  let component: TitleInputComponent;
  let fixture: ComponentFixture<TitleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleInputComponent ],
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
