import {Component, OnInit} from '@angular/core';
import {wine} from '../wine.model';
import {wineService} from '../wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class wineListComponent implements OnInit {
  winee: wine[];
  constructor(private wineService: wineService) { }

  ngOnInit(): void {
    this.winee = this.wineService.getwinee();
  }
}
