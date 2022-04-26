import { Component, OnInit } from '@angular/core';
import {wine} from './wine.model';
import {wineService} from './wine.service';

@Component({
  selector: 'app-winee',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  providers: [wineService]
})
export class wineComponent implements OnInit {

  selectedwine: wine;
  constructor(private wineService: wineService) { }

  ngOnInit(): void {
    this.wineService.wineSelected
      .subscribe(
        (wine: wine) => {
          this.selectedwine = wine;
        }
      );
  }

}
