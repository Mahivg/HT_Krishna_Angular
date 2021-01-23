import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'ht-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    new Product('p001',"Smart watch", "Used to track activity", 3000, 'https://images-na.ssl-images-amazon.com/images/I/61yeJbZkwmL._SL1500_.jpg', true),
    new Product('p002',"School Bag", "Used to taking books", 1500, 'https://images-na.ssl-images-amazon.com/images/I/81lmkcoo76L._SL1400_.jpg', true),
    new Product('p003',"Formal Shirt", "Used to wear formal appereance", 800, 'https://the-collective.imgix.net/img/app/product/3/389950-3643069.jpg?w=610&auto=format', true),
    new Product('p004',"Water bottle", "Used to drink some water", 150, 'https://images-na.ssl-images-amazon.com/images/I/51Cb8y2hJdL._SL1500_.jpg', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
