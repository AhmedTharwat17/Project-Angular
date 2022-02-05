import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { ProductComponent } from './product/product.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:ProductComponent},
  {path:'Products',component:ProductsPageComponent},
  {path:'Users',component:UsersPageComponent},
  {path:'Posts',component:PostsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
