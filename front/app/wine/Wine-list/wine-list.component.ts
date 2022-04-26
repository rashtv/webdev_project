import {Component, OnInit} from '@angular/core';
import {Wine} from '../Wine.model';
import {WineService} from '../Wine.service';

@Component({
  selector: 'app-Wine-list',
  templateUrl: './Wine-list.component.html',
  styleUrls: ['./Wine-list.component.css']
})
export class WineListComponent implements OnInit {
  Winee: Wine[];
  constructor(private WineService: WineService) { }

  ngOnInit(): void {
    this.Winee = this.WineService.getWinee();
  }
}
