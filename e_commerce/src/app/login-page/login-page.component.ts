import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 
  signUpFrom= new FormGroup({

      name:new FormControl('' ,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      age:new FormControl('' , [Validators.required,Validators.min(10),Validators.max(60) ]),
      email:new FormControl('',[Validators.required,Validators.email])



})

  
handleSubmit(){

 console.log(this.signUpFrom.value);


}

get f(){
 return this.signUpFrom.controls;

}



  

}
