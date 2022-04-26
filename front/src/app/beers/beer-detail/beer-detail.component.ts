import { Component, OnInit, Input} from '@angular/core';
import {beer} from '../beer.model';
import {beerService} from '../beer.service';

import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class beerDetailComponent implements OnInit {
  beer: beer;
  id: number;

  constructor(private beerService: beerService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.beer = this.beerService.getbeer(this.id);
        }
      );
  }
}
