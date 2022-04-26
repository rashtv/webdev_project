import { Component, OnInit, Input} from '@angular/core';
import { champagne} from '../../champagne.model';

@Component({
  selector: 'app-champagne-item',
  templateUrl: './champagne-item.component.html',
  styleUrls: ['./champagne-item.component.css']
})
export class champagneItemComponent implements OnInit {
  @Input() champagne: champagne;
  @Input() index: number;
  ngOnInit() {
  }

}
