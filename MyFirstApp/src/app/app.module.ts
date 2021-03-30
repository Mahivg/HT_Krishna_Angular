import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-third/my-third.component';
import { MyService } from './services/MyService';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './services/guard/Auth.gaurd';


const appRoutes: Routes = [
  {
    path: 'myfirst',
    component: MyFirstComponent
  },
  {
    path: 'mysecond',
    component: MySecondComponent
  },
  {
    path: 'mythird',
    component: MyThirdComponent,
    canActivate: [ AuthGaurd ]
  },
  {
    path: 'myparam/:id',
    component: MyThirdComponent
  },
  {
    path: '', // Default Routing
    redirectTo: 'myfirst',
    pathMatch: 'full'
  },
  {
    path: '**', // Wild Routing
    component: PageNotFoundComponent,
    // redirectTo: 'myfirst',
    // pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, MyFirstComponent, MySecondComponent, MyThirdComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [ MyService ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
