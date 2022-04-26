import { Component, OnInit } from '@angular/core';
import {beer} from './beer.model';
import {beerService} from './beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
  providers: [beerService]
})
export class beersComponent implements OnInit {

  selectedbeer: beer;
  constructor(private beerService: beerService) { }

  ngOnInit(): void {
    this.beerService.beerSelected
      .subscribe(
        (beer: beer) => {
          this.selectedbeer = beer;
        }
      );
  }

}
