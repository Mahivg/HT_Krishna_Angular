import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { MyService } from '../services/MyService';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css'],
  providers: [MyService]
})
export class MySecondComponent implements OnInit {

  strArray: string[] = ['1','2', '3', '4', '5', '6'];
  showThird: boolean = true;

  num1: number;

  // myServiceSecond: MyService;

  constructor(public myServiceSecond : MyService, private router: Router) { }

  ngOnInit(): void {


    // this.myServiceSecond = new MyService();
  //   this.myServiceSecond.products = [ new Product("1", "name1", "desc1"),
  // new Product("2", "name2", "desc2") ];
  }

  receiveMessages(msg: string) {
      console.log("In MySecondComponent : receiveMessages method...");
      console.log(msg);
      this.strArray.push(msg);
  }

  pushProduct() {
    this.myServiceSecond.products.push(new Product("3", "name3", "desc3"));
  }


  navigateTo(str: string) {

      //operation
      this.router.navigateByUrl('mythird');
      // this.router.navigateByUrl(str);
  }
}
