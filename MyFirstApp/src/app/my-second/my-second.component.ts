import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  strArray: string[] = ['1','2', '3', '4', '5', '6'];
  showThird: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessages(msg: string) {
      console.log("In MySecondComponent : receiveMessages method...");
      console.log(msg);
      this.strArray.push(msg);
  }

}
