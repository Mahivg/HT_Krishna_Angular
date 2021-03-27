import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  users: User[];


  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.appService.getUsers();
  }

  login() {
    const username = this.userNameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    console.log('Username :  ' + username);
    console.log('Password :   ' + password);

    // for(let i = 0; i < this.users.length; i++) {
    //   this.users[i].name == username;
    // }

    const user = this.users.find( u => u.name === username );
    console.log(user);
    // const user = this.users.find( u => u.name === username && u.password === password );

    if(user) {
      if(user.password === password) {
        console.log("User logged In....");
        this.router.navigateByUrl('products');

      } else {
        console.log("Invalid Password....");
      }
    } else {
      console.log("Invalid Credentials...");
    }

  }

}
