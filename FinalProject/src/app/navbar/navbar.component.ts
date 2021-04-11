import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'htf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  projectTitle = "Final Project";

  loginSubscription: Subscription;

  userLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.loginSubscription = this.authService.userLoggedIn$.subscribe(loginStatus => {
      this.userLoggedIn = loginStatus;
    });
  }
  logout() {
    this.userLoggedIn = false;
    this.authService.userLoggedIn.next(false);
  }


  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
