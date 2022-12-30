import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleInputComponent } from './title-input/title-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatusInputComponent } from './status-input/status-input.component'



@NgModule({
  declarations: [
    TitleInputComponent,
    StatusInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TitleInputComponent,
    StatusInputComponent
  ]
})
export class SharedModule { }
