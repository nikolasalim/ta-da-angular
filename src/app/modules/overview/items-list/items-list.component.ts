import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/models';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items$: Observable<IItem[]>;

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
    this.items$ = this.overviewService.items$;
  }
  
  trackByFn(index: number, item: IItem){
    return item.id;
  }

}
