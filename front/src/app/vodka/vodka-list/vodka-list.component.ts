import { Component, OnInit} from '@angular/core';
import {vodka} from '../vodka.model';
import {VodkaService} from '../vodka.service';

@Component({
  selector: 'app-vodka-list',
  templateUrl: './vodka-list.component.html',
  styleUrls: ['./vodka-list.component.css']
})
export class VodkaListComponent implements OnInit {
  vodka: vodka[];
  constructor(private vodkaService: VodkaService) { }

  ngOnInit() {
    this.vodka = this.vodkaService.getvodkas();
  }

}
