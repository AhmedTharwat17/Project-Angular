import { Injectable } from '@angular/core';
import { IPosts, IProduct , IUsers} from '../Shared Classes and types/interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AllProduct } from './../Shared Classes and types/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  urlUser:string="https://jsonplaceholder.typicode.com/users";
  urlPost:string="https://jsonplaceholder.typicode.com/posts";
  urlProduct:string="https://fakestoreapi.com/products";
  constructor(private http:HttpClient) {}
  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.urlUser).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
  getPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.urlPost).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
  getProducts():Observable<AllProduct[]>{
    return this.http.get<AllProduct[]>(this.urlProduct).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
  getProductDetials(id:number):Observable<AllProduct[]>{
    return this.http.get<AllProduct[]>(`https://fakestoreapi.com/products/${id}`).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }
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
