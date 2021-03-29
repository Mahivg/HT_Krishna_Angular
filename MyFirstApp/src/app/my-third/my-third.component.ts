import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
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

  myObservable: any;

  mySubscription: any;

  passSubscription: any;

  constructor(public myServiceThird: MyService, private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called...');
    console.log(changes);
  }

  ngOnInit(): void {


   this.passSubscription =  this.myServiceThird.textSubjectObserver.subscribe(data => { console.log(data)});
    console.log('ngOnInit Called...');
  //  this.myServiceThird = new MyService(); // breaking the singleton

    this.myThirdProducts = this.myServiceThird.getProducts();
  console.log(this.route);

    let routeParam = this.route.snapshot.params;
    console.log(routeParam['id']);

  //   this.myServiceThird.products = [ new Product("3", "name3", "desc3"),
  // new Product("4", "name4", "desc4") ];

    // setInterval(function() {  console.log(new Date().getDate());}, 500);

    // setTimeout(function(){ console.log('method called');}, 500);

    // interval(500).subscribe(data => {
    //   console.log(data);
    // });


    this.myObservable = new Observable((observer) => {

        // setInterval(function() {
        //   // next is the triggering method
        //   observer.next(new Date().getTime());
        // }, 1500);
    });



   this.mySubscription =  this.myObservable.subscribe(data => {
        console.log(data);
    });

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
    this.mySubscription.unsubscribe();
    this.passSubscription.unsubscribe();
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
