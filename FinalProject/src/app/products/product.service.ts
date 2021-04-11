import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product("p001", "School Bag", "Superior Durable Fabric 3 Compartments 17 Laptop Compatible Adjustable Shoulder and Waist Straps Extra Comfort Construction Secure Hidden Compartment Additional Spacious Utility Pocket", 799, "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg", true),
    new Product("p002", "Sunglass", "Metal Alloy Frame with Sturdy Legs That Are Ultra-lightweight Yet Dtrong and Aurable.; Antioxidant Plating,Anti-allergy & Skin-friendly Tested,Harmless to Skin; It Comes with Adjustable Silicon Nose Pads Which Allows for Maximum Comfort.", 1599, "https://5.imimg.com/data5/HK/RA/HU/SELLER-79659103/flash-sunglasses-for-men-and-women-500x500.jpg", true),
    new Product("p003", "Water Bottle", "Wide mouth, Easy Carry, Firm Grip, Airtight, Leakproof: Add ice cubes easily for a Cold Drink with its wide mouth Opening", 399, "http://mobileimages.lowes.com/product/converted/888830/888830072981.jpg", true),
    new Product("p004", "Smartphone", "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) front camera", 25000, "https://images.saymedia-content.com/.image/t_share/MTc1MDE0MzQwMjk3MzAzNzg0/top-10-affordable-mobile-phones.jpg", true),
    new Product("p005", "BAS Cric BAT", "CE BAS Vampire Bullet Kashmir Willow Cricket Bat", 5000, "https://cdn.shopify.com/s/files/1/1390/1485/products/image_356ca567-b82a-4f31-97c5-f4643938b12c_1024x1024.jpg?v=1571609325", true),
    new Product("p006", "HP Envy Laptop", "Display: 15.6-inch Full HD (1920 x 1080) anti-glare IPS display | 60Hz refresh rate, 250 Nits, 45% NTSC", 85000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUolunR0rHEZJCJqm4eZ7Oktf0SC36kwyloz8SmtZtVE_h64FteN2MgGspjLKwKJPHU0&usqp=CAU", true),
    new Product("p007", "Bread JAM", "Kissan Mixed Fruit Jam is made with 100% real fruit Ingredients • Is easy to use and can be enjoyed on the go every morning", 185, "https://images-na.ssl-images-amazon.com/images/I/61Lpw%2BHIeLL._SX569_.jpg", true),
    new Product("p008", "Sneekers", "Denim upper with washed upper Cushioned footbed Textured and patterned outsole", 854, "https://i.pinimg.com/736x/6f/ed/ef/6fedef2921836883a4216a777f47f5b5.jpg", true),
    new Product("p009", "Wall clock", "Ajanta Plastic Round Wall Clock (20.5 cm x 20.5 cm x 3.5 cm, Pink)", 175, "https://images.saymedia-content.com/.image/t_share/MTc1MDE0MzQwMjk3MzAzNzg0/top-10-affordable-mobile-phones.jpg", true),
    new Product("p010", "Canon Camera", "Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping)", 31999, "https://img.dtcn.com/image/canon-eos-5d-mark-iv-review-8-720x720.jpg?ver=1.jpg", true),
    new Product("p011", "Football", "Ensures Good Performance and High Durability, Built for Maximum Output", 499, "https://5.imimg.com/data5/IJ/JK/MY-11744895/playing-football-500x500.jpg", true),
    new Product("p012", "Teddy Bear", "Designed in an attractive color from soft fabric, your kids will not stop hugging", 360, "https://static.archiesonline.com/public/images/product/medium/archies-product-1-1612866394291521.jpg", true),
    new Product("p013", "Washing Machine", "Fully-automatic front load washing machine: Best Wash Quality, Energy", 22800, "https://images-na.ssl-images-amazon.com/images/I/81X52AI2ovL._SY500_.jpg", true),
    new Product("p014", "Sofa", "Have a seat and enjoy the comfy cushion support, the soft and durable", 18500, "https://www.ikea.com/in/en/images/products/ormaryd-2-seat-sofa-dark-blue__0921644_pe787923_s5.jpg?f=s", true),
    new Product("p015", "Formal Shirt", "Can be worn for from office to after meeting evening get together.", 2099, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKRhJ9rd6F3dmhflCqD1MJ2i9fvj_Q4EPgQ&usqp=CAU", true),
  ];

  constructor() { }

  getProducts(): Product[] {
    // return this.products.slice()
    return [...this.products];
  }


  getProductById(prodId: string): Product {
    const product = this.products.find(p => p.id == prodId);
    return product;
  }
}
