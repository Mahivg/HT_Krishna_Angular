import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  addcartSubject = new BehaviorSubject<boolean>(false);
  addcartSubject$ = this.addcartSubject.asObservable();

  cartPriceSubject = new BehaviorSubject<number>(0);
  cartPriceSubject$ = this.cartPriceSubject.asObservable();

  items : CartItem[] = [];

  price: number = 0;


  addItem(item: CartItem) {
    const itemPresent = this.items.find(i => i.item.id === item.item.id);

    if(itemPresent != null || itemPresent != undefined) {
       itemPresent.quantity++;
    }
    else {
      this.items.push(item);
      this.addcartSubject.next(true);
    }
    this.updatePrice();
  }

  updatePrice() {
    this.price = 0;
    this.items.forEach(item => {
      const prodPrice = item.quantity * item.item.price;
      this.price = this.price + prodPrice;
    });
    this.cartPriceSubject.next(this.price);
  }

  getCartItems(): CartItem[] {
    return [...this.items];
  }

}
