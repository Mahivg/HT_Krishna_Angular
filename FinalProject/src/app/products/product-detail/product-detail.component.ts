import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartItem } from 'src/app/shared/models/CartItem';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'htf-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private prodService: ProductService,
         private cartService: CartService) { }

  ngOnInit(): void {

    this.route.params.subscribe(rParams => {
      const prodId = rParams['prodId'];
      this.product = this.prodService.getProductById(prodId);
    })
  }

  addToCart(prodId: string){
    const cartItem = new CartItem(this.product, 1);
    this.cartService.addItem(cartItem);
  }

}
