import { Component, OnInit } from '@angular/core';
import 'lodash';

declare var _:any;

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.scss']
})
export class ActorsPageComponent implements OnInit {
  arr: [] = _.concat([1, 2], 3);

  constructor() { }

  ngOnInit(): void {
  }

}
