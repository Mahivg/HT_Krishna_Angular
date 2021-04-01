import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './services/gaurds/auth.gaurd';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// const scRoutes : Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'products',
//     component: ProductsComponent,
//     canActivate: [AuthGaurd],
//     canActivateChild: [AuthGaurd],
//     children : [
//       {
//         path: ':prodId', // products/:prodId
//         component: ProductDetailComponent,
//       },

//       {
//         path: ':prodId/edit',
//         component: ProductDetailComponent
//       }
//     ]
//   },
//   // {
//   //   path: 'products/:prodId',
//   //   component: ProductDetailComponent,
//   //   canActivate: [AuthGaurd]
//   // },

//   {
//     path: 'checkout',
//     component: CheckoutComponent
//   },
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   }
// ];
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot(scRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
