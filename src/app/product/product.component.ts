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
    this.Discount = DiscountOffers.down;
    this.Storename = "EGD Store";
    this.StoreLogo = "../../assets/images/background.jpg";
    this.ProductList = [
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
    this.CategoryList = [
      {
        ID:1,
        Name:"Electronics"
      },
      {
        ID:2,
        Name:"Groceries"
      },
      {
        ID:3,
        Name:"Crafts&Sewing"
      }
    ]
    this.ClientName = "Ahmed Tharwat",
    this.IsPurshased = false
  }
  toggleBuy(){
    this.IsPurshased = !this.IsPurshased;
  }
  ngOnInit(): void {
  }
}
