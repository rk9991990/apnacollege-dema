import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 
  signUpFrom= new FormGroup({

      name:new FormControl('' ,[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern('^[a-zA-Z ]*$')]),
      age:new FormControl('' , [Validators.required,Validators.min(10),Validators.max(60) ]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      gender:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required])



})

  
handleSubmit(){

 console.log(this.signUpFrom.value);


}

get f(){
 return this.signUpFrom.controls;

}



  

}
