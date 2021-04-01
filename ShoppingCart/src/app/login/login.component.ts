import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AppService } from '../services/app.service';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  @ViewChild('txtUserName')
  userNameInput: ElementRef;

  @ViewChild('txtPassword')
  passwordInput: ElementRef;

  // @ViewChild('loginForm')
  // myLoginForm: NgForm;

  users: User[];


  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.appService.getUsers();
  }

  login(loginForm: NgForm) {

    if(loginForm.invalid){
      return;
    }
    // const username = this.userNameInput.nativeElement.value;
    // const password = this.passwordInput.nativeElement.value;

    // console.log('Username :  ' + username);
    // console.log('Password :   ' + password);

    // for(let i = 0; i < this.users.length; i++) {
    //   this.users[i].name == username;
    // }

    // const user = this.users.find( u => u.name === username );
    // console.log(user);
    // const user = this.users.find( u => u.name === username && u.password === password );

    // if(user) {
    //   if(user.password === password) {
    //     console.log("User logged In....");
    //     // publisher block
    //     this.appService.userLoggedIn.next(true);
    //     this.appService.setUserLoginStatus(true);
    //     this.router.navigateByUrl('products');

    //   } else {
    //     console.log("Invalid Password....");
    //     // publisher block
    //     this.appService.userLoggedIn.next(false);
    //   }
    // } else {
    //   console.log("Invalid Credentials...");
    //   // publisher block
    //   this.appService.userLoggedIn.next(false);
    // }


    console.log(loginForm);
    // console.log(loginForm.value);
    // console.log(loginForm.controls.usrname.value);
    // console.log(loginForm.controls.pwd.value);
    let userCred = loginForm.value;
    const user = this.users.find( u => u.name === userCred.usrname );
    // console.log(user);
    // const user = this.users.find( u => u.name === username && u.password === password );

    if(user) {
      if(user.password === userCred.pwd) {
        console.log("User logged In....");
        // publisher block
        this.appService.userLoggedIn.next(true);
        this.appService.setUserLoginStatus(true);
        this.router.navigateByUrl('products');

      } else {
        console.log("Invalid Password....");
        // publisher block
        this.appService.userLoggedIn.next(false);
      }
    } else {
      console.log("Invalid Credentials...");
      // publisher block
      this.appService.userLoggedIn.next(false);
    }
    // const userNameControl = loginForm.controls.usrname.value;

  }

}
