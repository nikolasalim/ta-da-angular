import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
