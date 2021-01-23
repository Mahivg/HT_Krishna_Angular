export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  active: boolean;

  constructor(pId:string, pName: string, pDesc: string, pPrice: number, pImageUrl:string, pActive:boolean) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.price = pPrice;
    this.imageUrl = pImageUrl;
    this.active = pActive;
  }
}
