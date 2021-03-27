import { Injectable } from "@angular/core";
import { Product } from "../model/Product";
import { User } from "../model/User";


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isUserLoggedIn: boolean;

  private products: Product[] = [
    new Product("p001", "School Bag", "Superior Durable Fabric 3 Compartments 17 Laptop Compatible Adjustable Shoulder and Waist Straps Extra Comfort Construction Secure Hidden Compartment Additional Spacious Utility Pocket", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
    new Product("p002", "Sunglass", "Metal Alloy Frame with Sturdy Legs That Are Ultra-lightweight Yet Dtrong and Aurable.; Antioxidant Plating,Anti-allergy & Skin-friendly Tested,Harmless to Skin; It Comes with Adjustable Silicon Nose Pads Which Allows for Maximum Comfort.", 1599, "https://5.imimg.com/data5/HK/RA/HU/SELLER-79659103/flash-sunglasses-for-men-and-women-500x500.jpg", true),
    new Product("p003", "Water Bottle", "Wide mouth, Easy Carry, Firm Grip, Airtight, Leakproof: Add ice cubes easily for a Cold Drink with its wide mouth Opening", 399, "http://mobileimages.lowes.com/product/converted/888830/888830072981.jpg", true),
    new Product("p004", "Smartphone", "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) front camera", 25000, "https://images.saymedia-content.com/.image/t_share/MTc1MDE0MzQwMjk3MzAzNzg0/top-10-affordable-mobile-phones.jpg", true),
  ];

  private users: User[] = [
    new User('test1', 'test1212'),
    new User('test2', 'test1313')
  ];

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: string) : Product {
    return this.products.find(p => p.id === id);
  }

  public addProduct(prod: Product) {
    this.products.push(prod);
  }


  public getUsers(): User[] {
    return this.users;
  }

  public getUserLoginStatus(): boolean {
    return this.isUserLoggedIn;
  }

  public setUserLoginStatus(status: boolean) {
    this.isUserLoggedIn = status;
  }

}
