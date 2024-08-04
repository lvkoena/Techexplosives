import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/view-register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/view-login/login.component';
import { HomeComponent } from './components/view-home/home.component';
import { NavbarComponent } from './components/view-navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { ProductDetailsComponent } from './components/view-product-details/product-details.component';
import { CartComponent } from './components/view-cart/cart.component';
import { FooterComponent } from './components/view-footer/footer.component';
import { AboutComponent } from './components/view-about/about.component';
import { CheckoutComponent } from './components/view-checkout/checkout/checkout.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailsComponent,
    CartComponent,
    FooterComponent,
    AboutComponent,
    CheckoutComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
