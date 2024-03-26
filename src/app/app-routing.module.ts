import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/view-home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/view-product-details/product-details.component';
import { CartComponent } from './components/view-cart/cart.component';
import { AboutComponent } from './components/view-about/about.component';
import { CheckoutComponent } from './components/view-checkout/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
