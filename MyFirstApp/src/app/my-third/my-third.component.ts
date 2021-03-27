import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { MyService } from '../services/MyService';

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

  // myServiceThird: MyService;

  myThirdProducts: Product[];

  constructor(public myServiceThird: MyService, private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called...');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called...');
  //  this.myServiceThird = new MyService(); // breaking the singleton

    this.myThirdProducts = this.myServiceThird.getProducts();
  console.log(this.route);

    let routeParam = this.route.snapshot.params;
    console.log(routeParam['id']);

  //   this.myServiceThird.products = [ new Product("3", "name3", "desc3"),
  // new Product("4", "name4", "desc4") ];
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

  getPrdoucts() {
    this.myServiceThird.products = this.myServiceThird.getProducts();
  }

}
