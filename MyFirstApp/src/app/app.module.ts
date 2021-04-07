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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';


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
    path: 'posts',
    component: PostsComponent,
    canActivate: [ AuthGaurd ]
  },
  {
    path: 'posts/add-new',
    component: AddPostComponent,
    canActivate: [ AuthGaurd ]
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
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
    AppComponent, MyFirstComponent, MySecondComponent, MyThirdComponent, PageNotFoundComponent, PostsComponent, PostDetailComponent, AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  // providers: [ MyService ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
