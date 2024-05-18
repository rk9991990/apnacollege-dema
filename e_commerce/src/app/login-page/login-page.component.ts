import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 
  signUpFrom= new FormGroup({

      name:new FormControl('' ,[Validators.required]),
      age:new FormControl('' , [Validators.required]),
      email:new FormControl('',[Validators.required])



})

  
handleSubmit(){

 console.log(this.signUpFrom.value);


}

get f(){
 return this.signUpFrom.controls;

}



  

}
