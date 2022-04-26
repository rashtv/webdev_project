import { Component, OnInit, Input} from '@angular/core';
import {Wine} from '../Wine.model';
import {WineService} from '../Wine.service';

import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-Wine-detail',
  templateUrl: './Wine-detail.component.html',
  styleUrls: ['./Wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
  Wine: Wine;
  id: number;

  constructor(private WineService: WineService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.Wine = this.WineService.getWine(this.id);
        }
      );
  }
}
