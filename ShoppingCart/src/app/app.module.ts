import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';

const scRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    // children : [
    //   {
    //     path: ':prodId', // products/:prodId
    //     component: ProductDetailComponent,
    //   }
    // ]
  },
  {
    path: 'products/:prodId',
    component: ProductDetailComponent,
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ProductsComponent,
    ProductDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(scRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
