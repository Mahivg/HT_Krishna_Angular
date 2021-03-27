import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { AppService } from '../services/app.service';

@Component({
  selector: 'ht-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.params;

    const productId = routeParams['prodId'];

    this.selectedProduct = this.appService.getProductById(productId);


  }

}
