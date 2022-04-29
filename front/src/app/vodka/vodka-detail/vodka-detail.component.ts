import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import {vodka} from '../vodka.model';
import {VodkaService} from '../vodka.service';


@Component({
  selector: 'app-vodka-detail',
  templateUrl: './vodka-detail.component.html',
  styleUrls: ['./vodka-detail.component.css']
})
export class vodkaDetailComponent implements OnInit {
  vodka: vodka;
  id: number;
  constructor(private vodkaService: VodkaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.vodka = this.vodkaService.getvodka(this.id);
        }
      );
  }

}
