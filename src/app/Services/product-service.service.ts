import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() { }
  Products:IProduct[] = [
    {
      ID:1,
      Name:"Sweatshirt",
      Quantity:80,
      Price:400,
      Img:"../../assets/images/product1.jpg"
    },
    {
      ID:2,
      Name:"trouser",
      Quantity:50,
      Price:300,
      Img:"../../assets/images/product2.jpg"
    },
    {
      ID:3,
      Name:"Shose",
      Quantity:70,
      Price:250,
      Img:"../../assets/images/product3.jpg"
    }
  ];
  GetAllProducts(){
    return this.Products
  }
  getProductById(prodId:number){
    const product = this.Products.find(product => product.ID === prodId);
    if(!product || isNaN(prodId)) null;
    return product;
  }
}
