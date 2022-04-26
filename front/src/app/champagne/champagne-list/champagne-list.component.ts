import { Component, OnInit} from '@angular/core';
import {champagne} from '../champagne.model';
import {champagneService} from '../champagne.service';

@Component({
  selector: 'app-champagne-list',
  templateUrl: './champagne-list.component.html',
  styleUrls: ['./champagne-list.component.css']
})
export class champagneListComponent implements OnInit {
  champagne: champagne[];
  constructor(private champagneService: champagneService) { }

  ngOnInit() {
    this.champagne = this.champagneService.getchampagne();
  }

}
