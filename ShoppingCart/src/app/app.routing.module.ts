import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./checkout/checkout.component";
import { LoginComponent } from "./login/login.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";
import { AuthGaurd } from "./services/gaurds/auth.gaurd";


const scRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGaurd],
    // canActivateChild: [AuthGaurd],
    // children : [
    //   {
    //     path: ':prodId', // products/:prodId
    //     component: ProductDetailComponent,
    //   },

    //   {
    //     path: ':prodId/edit',
    //     component: ProductDetailComponent
    //   }
    // ]
  },
  {
    path: 'products/:prodId',
    component: ProductDetailComponent,
    canActivate: [AuthGaurd]
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({

  imports: [ RouterModule.forRoot(scRoutes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
