import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  players =[

  'Sachin Tendulkar',

  'Virendra sehbag',
  'Yuvraj singh',
  ]
  
    Selected =''
    update(e:any){
   this.Selected=e.target.value;

    } 
}
