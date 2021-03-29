import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Product } from "../model/Product";

@Injectable( {
  providedIn: 'root'
})
export class MyService {

    // pushing the data
    textSubject = new BehaviorSubject<string>('');
    // receiving the data
    textSubjectObserver = this.textSubject.asObservable();

    constructor(){}

    public products: Product[] = [
      new Product("1", "name1", "desc1"),
      new Product("2", "name2", "desc2")
     // new Product("3", "name3", "desc3"),
      //new Product("4", "name4", "desc4")
    ];

    getProducts(): Product[] {
      return this.products;
    }

}
