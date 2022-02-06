import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountChildComponent } from './discount-child/discount-child.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { ProductComponent } from './product/product.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { WithoutDiscountChildComponent } from './without-discount-child/without-discount-child.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:ProductComponent},
  {path:'Products',component:ProductsPageComponent,
    children:[
      {path:'Discount',component:DiscountChildComponent},
      {path:'WithoutDiscount',component:WithoutDiscountChildComponent}
    ]
  },
  {path:'Product/:id',component:ProductDetialsComponent},
  {path:'Users',component:UsersPageComponent},
  {path:'Posts',component:PostsPageComponent},
  {path:'Register',component:RegisterPageComponent},
  {path:'Login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
