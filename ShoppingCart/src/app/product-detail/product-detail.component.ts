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


    // subscribing to latest value
    this.route.params.subscribe(rParams => {
      const productId = rParams['prodId'];
      this.selectedProduct = this.appService.getProductById(productId);
    });


    this.route.queryParams.subscribe(qParams => {
      const name = qParams['name'];
      console.log(name);

    });

    // snapshot is an unchanged value
    // let routeParams = this.route.snapshot.params;
    // const queryParams = this.route.snapshot.queryParams;

    // const productId = routeParams['prodId'];

    // const name = queryParams['name'];

    // this.selectedProduct = this.appService.getProductById(productId);

  }

}
