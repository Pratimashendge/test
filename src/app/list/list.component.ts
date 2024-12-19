import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 skillArr:Array<string>=["HTML","CSS","JS","Bootstrap","Angular"]
  constructor() { }

  ngOnInit(): void {
  }

}
