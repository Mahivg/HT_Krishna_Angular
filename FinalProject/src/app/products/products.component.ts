import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from './product.service';

@Component({
  selector: 'htf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.prodService.getProducts();
  }

  showProduct(prodId: string) {
    this.router.navigateByUrl('/products/' + prodId);
  }

}
