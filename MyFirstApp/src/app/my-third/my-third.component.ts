import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent implements OnInit {


  myStr: string = "dummy";

  @Input('strData')
  strThirdArray: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
