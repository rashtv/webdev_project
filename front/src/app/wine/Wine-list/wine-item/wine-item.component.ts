import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { wine} from '../../wine.model';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class wineItemComponent implements OnInit {
  @Input() wine: wine;
  @Input() index: number;
  ngOnInit() {
  }

}
