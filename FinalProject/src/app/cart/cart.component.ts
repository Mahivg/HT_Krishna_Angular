import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'htf-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addCartSubscription: Subscription;

  cartPriceSubscription: Subscription;

  cartItems: CartItem[] = [];

  totalPrice: number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.addCartSubscription = this.cartService.addcartSubject$.subscribe(isItemAdded => {
      if(isItemAdded) {
        this.cartItems = this.cartService.getCartItems();
      }
    });

    this.cartPriceSubscription = this.cartService.cartPriceSubject$.subscribe(newPrice =>{
      this.totalPrice = newPrice;
    });
  }

}
