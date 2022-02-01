import { Component, OnInit } from '@angular/core';
import { IPerson , ICategory , DiscountOffers } from '../Shared Classes and types/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Discount:DiscountOffers;
  Storename:string;
  StoreLogo:string;
  ProductList:IPerson[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  constructor() {
    this.Discount = DiscountOffers.up;
    this.Storename = "EGD Store";
    this.StoreLogo = "../../assets/images/product.jpg";
    this.ProductList = [
      {
        ID:1,
        Name:"Shirt",
        Quantity:80,
        Price:500,
        Img:"../../assets/logo.png"
      },
      {
        ID:2,
        Name:"cap",
        Quantity:50,
        Price:100,
        Img:"../../assets/logo.png"
      }
    ];
    this.CategoryList = [
      {
        ID:1,
        Name:"A"
      },
      {
        ID:2,
        Name:"B"
      }
    ]
    this.ClientName = "Ahmed",
    this.IsPurshased = true
  }
  ngOnInit(): void {
  }

}
