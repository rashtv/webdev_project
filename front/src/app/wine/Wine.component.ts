import { Component, OnInit } from '@angular/core';
import {Wine} from './Wine.model';
import {WineService} from './Wine.service';

@Component({
  selector: 'app-Winee',
  templateUrl: './Wine.component.html',
  styleUrls: ['./Wine.component.css'],
  providers: [WineService]
})
export class WineComponent implements OnInit {

  selectedWine: Wine;
  constructor(private WineService: WineService) { }

  ngOnInit(): void {
    this.WineService.WineSelected
      .subscribe(
        (Wine: Wine) => {
          this.selectedWine = Wine;
        }
      );
  }

}
