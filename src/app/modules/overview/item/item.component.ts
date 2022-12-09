import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/models';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
  }

  removeItem(id: number | undefined){
    if (id){
      this.overviewService.removeItem(id)
        .subscribe(sub => console.log('on sub:', sub));
    }
  }

}