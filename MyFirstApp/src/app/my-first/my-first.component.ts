import { Component, ElementRef, ViewChild } from "@angular/core";
import { Product } from "../model/Product";

@Component({
  selector: 'app-my-first', //<app-my-first> </app-my-first>,
  // selector: '.app-my-first',
  // template: `<h1> This is my First component </h1>
  //             <h2> THis is another from template tag </h2>`,
  // styles: [`h2 {color : red}`],
  templateUrl: "./my-first.component.html",
  styleUrls: ['./my-first.component.css']

})
export class MyFirstComponent {

  num1: number = 10;

  inputText: string = "Default Text";

  myBoolean: boolean = true;

  myStringArray: string[] = ['str1', '10'];

  myProd : Product = new Product("1", "Test", "Good");

  @ViewChild('myInput') txtInput1: ElementRef;

  @ViewChild('myNumInput') numInput1: ElementRef;

  num2: number = 0;

  @ViewChild('myDiv') myDivElem: ElementRef;

  textInInput: string = "";

  buttonClicked(event) {
    console.log(" I am getting clicked..........");
    console.log(event);
    // console.log(txtTempRef.value);

    this.textInInput = this.txtInput1.nativeElement.value;
    console.log(this.txtInput1.nativeElement.value);
    this.txtInput1.nativeElement.value = "Changed Value";
    this.txtInput1.nativeElement.value = "";
    this.txtInput1.nativeElement.disabled = true;

    this.myDivElem.nativeElement.innerHTML = "<h2>Content Replaced</h2>";
  }

  calculate() {
    this.num2 = this.numInput1.nativeElement.value;
  }

}
