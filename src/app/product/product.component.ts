import { Component, OnInit} from '@angular/core';
import { IProduct , ICategory , DiscountOffers } from '../Shared Classes and types/interface';
import { ProductServiceService } from './../Services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  Discount:DiscountOffers;
  Storename:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  Product:any={};
  showDetials:boolean=false;
  showProducts:boolean=false;

  constructor(private getProducts:ProductServiceService) {
    this.Discount = DiscountOffers.down;
    this.Storename = "EGD Store";
    this.StoreLogo = "../../assets/images/background.jpg";
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
    this.IsPurshased = true;
  }
  ngOnInit(): void {
    this.ProductList = this.getProducts.GetAllProducts()
  }
  renderValues(){
    this.ProductList = this.getProducts.GetAllProducts()
    this.showProducts = !this.showProducts
  }
  viewProduct(id:any){
    this.Product = this.getProducts.getProductById(id);
    this.showDetials= true;
  }
}
