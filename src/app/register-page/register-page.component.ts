import { Component, OnInit } from '@angular/core';
import { Users } from './Register class/users';
import { ProductServiceService } from './../Services/product-service.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidator , ConfirmPasswordValidator } from './Register Validation/validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  MediaList=["Facebook" , "Twitter" , "Google"]

  constructor(private register:ProductServiceService , private fb:FormBuilder) { }

  usersModel:Users=new Users("","","","","");
  msg:string = "";
  suggest:boolean = false;
  ngOnInit(): void {
  }

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),UserNameValidator(/admin | adminstrator/)]],
    password:[''],
    confirmPassword:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
  },{validator:[ConfirmPasswordValidator]})

  get userName(){
    return this.registerationForm.get('userName');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }

  get aleternativeEmails()
  {
    return this.registerationForm.get("alternativeEmails") as FormArray;
  }

  addAlternativeEmail()
  {
    this.aleternativeEmails.push(this.fb.control(""))
  }

  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.email?.setValidators(Validators.required)
      }
      else
      {
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity();
    })
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
