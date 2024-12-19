import { Component, OnInit } from '@angular/core';
import { postArray } from './constant/posts';
import { Ipost } from './module/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
postArray:Array<Ipost>=postArray
  constructor() { }

  ngOnInit(): void {
  }

}
