import { Component, OnInit } from '@angular/core';
import { Users } from './Register class/users';
import { ProductServiceService } from './../Services/product-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  MediaList=["Facebook" , "Twitter" , "Google"]
  constructor(private register:ProductServiceService) { }
  usersModel:Users=new Users("","","","","");
  msg:string = "";
  suggest:boolean = false;
  ngOnInit(): void {
  }
  onSubmit(){
    this.register.sendDataRegister(this.usersModel).subscribe(user => {
      console.log("success",user);
    })
  }
  suggestMassage(){
    this.msg = "Suggest Registration";
    this.suggest = true
  }
}
