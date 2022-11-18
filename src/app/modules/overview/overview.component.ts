import { Component, OnInit } from '@angular/core';
import { OverviewService } from './services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
    this.overviewService.getItems().subscribe();
  }

}
