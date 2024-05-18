import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import {FormBuilder,FormGroup,Validators} from '@angular/forms'
// import { from } from 'rxjs';

@Component({
  selector: 'app-currency-selection',
  templateUrl: './currency-selection.component.html',
  styleUrl: './currency-selection.component.css'
})
export class CurrencySelectionComponent {

  currency=[

  'United_States_Dollar:$',
'Euro: €',
'British Pound Sterling: £',
'Japanese Yen: ¥' ,
'Chinese Yuan: ¥ ',
'Indian Rupee: ₹ ',
'Canadian Dollar: C$',
'Australian Dollar: A$' ,
'Swiss Franc: CHF',
'South African Rand: R' ,
'Mexican Peso: Mex$' ,
'Russian Ruble: ₽' ,
'Brazilian Real: R$',
'South Korean Won: ₩' 
  ]

  currency_selection=''

  update(e:any){
   
      this.currency_selection=e.target.value;
   
       } 

      

  // currencyForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.currencyForm = this.fb.group({
  //     currency: ['', Validators.required],
  //     package: ['', [Validators.required, Validators.minLength(3)]]
  //   });
  // }

  // onSubmit() {
  //   if (this.currencyForm.valid) {
  //     console.log(this.currencyForm.value);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
       
  }

