import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Wine} from '../../Wine.model';

@Component({
  selector: 'app-Wine-item',
  templateUrl: './Wine-item.component.html',
  styleUrls: ['./Wine-item.component.css']
})
export class WineItemComponent implements OnInit {
  @Input() Wine: Wine;
  @Input() index: number;
  ngOnInit() {
  }

}
