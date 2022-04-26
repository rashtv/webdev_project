import { Component, OnInit } from '@angular/core';
import {champagne} from './champagne.model';
import {champagneService} from './champagne.service';

@Component({
  selector: 'app-champagne',
  templateUrl: './champagne.component.html',
  styleUrls: ['./champagne.component.css'],
  providers: [champagneService]
})
export class champagneComponent implements OnInit {

  selectedchampagne: champagne;
  constructor(private champagneService: champagneService) { }

  ngOnInit() {
    this.champagneService.champagneSelected
      .subscribe(
        (champagne: champagne) => {
          this.selectedchampagne = champagne;
        }
      );
  }

}
