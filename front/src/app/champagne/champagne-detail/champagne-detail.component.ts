import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import {champagne} from '../champagne.model';
import {champagneService} from '../champagne.service';


@Component({
  selector: 'app-champagne-detail',
  templateUrl: './champagne-detail.component.html',
  styleUrls: ['./champagne-detail.component.css']
})
export class champagneDetailComponent implements OnInit {
  champagne: champagne;
  id: number;
  constructor(private champagneService: champagneService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.champagne = this.champagneService.getchampagner(this.id);
        }
      );
  }

}
