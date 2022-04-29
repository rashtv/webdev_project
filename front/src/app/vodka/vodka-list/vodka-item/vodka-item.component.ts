import { Component, OnInit, Input} from '@angular/core';
import { vodka} from '../../vodka.model';

@Component({
  selector: 'app-vodka-item',
  templateUrl: './vodka-item.component.html',
  styleUrls: ['./vodka-item.component.css']
})
export class VodkaItemComponent implements OnInit {
  @Input() vodka: vodka;
  @Input() index: number;
  ngOnInit() {
  }

}
