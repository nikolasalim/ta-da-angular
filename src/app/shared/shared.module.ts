import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleInputComponent } from './title-input/title-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StatusInputComponent } from './status-input/status-input.component';
import { DurationLevelSelectComponent } from './duration-level-select/duration-level-select.component'
import { CloseOnClickoutDirective } from './directives/click-outside/click-outside.directive';
import { SettingsService } from './services/settings.service';
import { UIService } from './services/ui.service';



@NgModule({
  declarations: [
    TitleInputComponent,
    StatusInputComponent,
    DurationLevelSelectComponent,
    CloseOnClickoutDirective,
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
    CloseOnClickoutDirective,
    TitleInputComponent,
    StatusInputComponent,
    DurationLevelSelectComponent
  ],
  providers: [
    SettingsService,
    UIService
  ]
})
export class SharedModule { }
