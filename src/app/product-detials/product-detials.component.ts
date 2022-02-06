import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductServiceService } from './../Services/product-service.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit {

  constructor(private getProduct:ProductServiceService,private activatedRoute:ActivatedRoute,private router:Router) { }
  id:any;
  Product:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.id=params.get("id");
      this.getProduct.getProductDetials(this.id).subscribe(product => {
        this.Product = product;
      })
    })
  }

}
