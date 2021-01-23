import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [
    new User('Test', 'test'),
    new User('Test2', 'test1212'),
    new User('Test3', 'test1313'),
    new User('Test4', 'test1414'),
    new User('Test5', 'test1515')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
