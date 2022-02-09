import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export function UserNameValidator(userValid:RegExp):ValidatorFn{
return (control:AbstractControl)=>{
    const user = userValid.test(control.value);
    return user ? {'userValid':{value:control.value}}:null;
  }
}

export function ConfirmPasswordValidator(control:AbstractControl){
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    if(password?.pristine || confirmPassword?.pristine){
      return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?{'misMatch':true} :null;
}
