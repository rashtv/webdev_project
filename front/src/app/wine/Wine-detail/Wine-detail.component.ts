import { Component, OnInit, Input} from '@angular/core';
import {wine} from '../wine.model';
import {wineService} from '../wine.service';

import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class wineDetailComponent implements OnInit {
  wine: wine;
  id: number;

  constructor(private wineService: wineService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.wine = this.wineService.getwine(this.id);
        }
      );
  }
}
