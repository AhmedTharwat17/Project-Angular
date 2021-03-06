import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from './Services/product-service.service';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiscountChildComponent } from './discount-child/discount-child.component';
import { WithoutDiscountChildComponent } from './without-discount-child/without-discount-child.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomePageComponent,
    ProductsPageComponent,
    UsersPageComponent,
    PostsPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DiscountChildComponent,
    WithoutDiscountChildComponent,
    ProductDetialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
