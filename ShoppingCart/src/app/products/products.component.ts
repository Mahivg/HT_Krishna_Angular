import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'ht-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product =  new Product("p001", "School Bag", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true);

  products: Product[] = [
    new Product("p001", "School Bag", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
    new Product("p002", "Sunglass", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
    new Product("p003", "water bottle", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
    new Product("p004", "Smartphone", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
