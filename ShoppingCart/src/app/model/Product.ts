export class Product {

  id: string;

  name: string;

  description: string;

  price: number;

  imageUrl: string;

  active: boolean;

  constructor(pId: string, pName: string, pDescription: string, pPrice: number, pImageUrl: string, pActive: boolean) {
    this.id = pId;
    this.name = pName;
    this.description = pDescription;
    this.price = pPrice;
    this.imageUrl = pImageUrl;
    this.active = pActive;
  }

}
