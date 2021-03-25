import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AppService } from '../services/app.service';

@Component({
  selector: 'ht-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product =  new Product("p001", "School Bag", "Used to carry some books", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true);

  // @Input()
  products: Product[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.products = this.appService.getProducts();
  }

}
