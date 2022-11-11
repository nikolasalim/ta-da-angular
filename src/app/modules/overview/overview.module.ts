import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from './overview.component';
import { ItemsListComponent } from './items-list/items-list.component';


@NgModule({
  imports: [
    OverviewRoutingModule,
    SharedModule
  ],
  declarations: [
    OverviewComponent,
    ItemsListComponent
  ]
})
export class OverviewModule { }
