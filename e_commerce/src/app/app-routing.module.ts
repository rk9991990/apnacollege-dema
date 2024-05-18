import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent } from './cart/cart.component';
import { CurrencySelectionComponent } from './currency-selection/currency-selection.component';

const routes: Routes = [

   {
        path :'Home',
        component:HomeComponent,
   },

   {
        path:'seller-auth',
        component:SellerAuthComponent,

   },
     {
      path:'login-page',
      component:LoginPageComponent,
     
     },

     {
      path:'cart',
      component:CartComponent,

     },
     {
     path:'currencySelcection',
     component:CurrencySelectionComponent

     }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
