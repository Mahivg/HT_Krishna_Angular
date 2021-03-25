import { Component } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'ht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';

  tabName: string = 'login';

  products: Product[] = [];

  changeTabName(tName: string) {
    this.tabName = tName;
  }

}
