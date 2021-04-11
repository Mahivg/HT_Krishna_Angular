import { Product } from "src/app/models/Product";

export class CartItem {
  item: Product;
  quantity: number;

  constructor(cItem: Product, cQuantity: number) {
    this.item = cItem;
    this.quantity = cQuantity;
  }
}
