import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  myStr: string = "dummy";

  @ViewChild('childInput')
  childInput: ElementRef

  @Input('strData')
  strThirdArray: string[];

  @Output('push')
  pushMessage = new EventEmitter<string>();
  // pushMessage = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called...');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called...');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Called...');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called...');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called...');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called...');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called...');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called...');
  }


  passMessage() {
    console.log("Inside PassMessage Method...");

    let msg = this.childInput.nativeElement.value;

    this.pushMessage.emit(msg);

    this.pushMessage.emit(msg + '  added additional text');
    // this.pushMessage.emit(2000);
  }

}
