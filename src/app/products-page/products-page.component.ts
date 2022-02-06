import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllProduct } from './../Shared Classes and types/interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  ProductsList:AllProduct[];
  constructor(private getProducts:ProductServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts.getProducts().subscribe(products => {
      this.ProductsList = products;
    })
  }
  goToProduct(pro:any){
    this.router.navigate(["/Product",pro.id]);
  }
  goToDiscount(){
    this.router.navigate(['Discount'],{relativeTo:this.activatedRoute});
  }
  goToWithoutDiscount()
  {
    this.router.navigate(['WithoutDiscount'],{relativeTo:this.activatedRoute});
  }
}
