export interface IProduct {
  ID:number,
  Name:string,
  Quantity:number,
  Price:number,
  Img:string
}

export interface ICategory {
  ID:number,
  Name:string
}

export interface IUsers {
  name:string,
  username:string,
  email:string
}

export interface IPosts {
  id:number,
  title:string,
  body:string
}

export enum DiscountOffers {not = "No Discount" , up =  "10%" , down =  "15%"};
