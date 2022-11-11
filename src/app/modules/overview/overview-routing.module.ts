import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      {path: '', component: ItemsListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
