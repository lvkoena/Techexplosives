import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/view-login/login.component';
import { HomeComponent } from './components/view-home/home.component';
import { ProductDetailsComponent } from './components/view-product-details/product-details.component';
import { CartComponent } from './components/view-cart/cart.component';
import { AboutComponent } from './components/view-about/about.component';
import { SetupRegisterComponent } from './components/view-register/setup-register/setup-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'setupRegister', component: SetupRegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
