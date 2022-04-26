import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { beer} from '../../beer.model';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class beerItemComponent implements OnInit {
  @Input() beer: beer;
  @Input() index: number;
  ngOnInit() {
  }

}
