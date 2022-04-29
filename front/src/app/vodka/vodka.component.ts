import { Component, OnInit } from '@angular/core';
import {vodka} from './vodka.model';
import {VodkaService} from './vodka.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.css'],
  providers: [VodkaService]
})
export class vodkaComponent implements OnInit {

  selectedvodka: vodka;
  constructor(private vodkaService: VodkaService) { }

  ngOnInit() {
    this.vodkaService.vodkaSelected
      .subscribe(
        (vodka: vodka) => {
          this.selectedvodka = vodka;
        }
      );
  }

}
