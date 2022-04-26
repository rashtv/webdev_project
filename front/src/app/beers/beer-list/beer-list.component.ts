import {Component, OnInit} from '@angular/core';
import {beer} from '../beer.model';
import {beerService} from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class beerListComponent implements OnInit {
  beers: beer[];
  constructor(private beerService: beerService) { }

  ngOnInit(): void {
    this.beers = this.beerService.getbeers();
  }
}
