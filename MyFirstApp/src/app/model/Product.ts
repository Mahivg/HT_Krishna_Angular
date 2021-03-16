export class Product {
  id: string;

  name: string;

  description: string;

  // constructor(){}

  constructor(pid:string, pName: string, pDescription: string) {
    this.id= pid;
    this.name = pName;
    this.description = pDescription;
  }


}
