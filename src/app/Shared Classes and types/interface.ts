export interface IPerson {
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

export enum DiscountOffers {not = "No Discount" , up =  "10%" , down =  "15%"};
