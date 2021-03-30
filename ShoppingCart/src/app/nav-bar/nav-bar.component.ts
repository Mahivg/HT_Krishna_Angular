import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../services/app.service';

@Component({
  selector: 'ht-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('ptitle')
  projectTitle: string;

  @Output()
  onTabChange = new EventEmitter<string>();

  userLoggedIn: boolean = false;

  userLogInSubcription: Subscription;

  constructor(private appService: AppService, private router : Router) { }

  ngOnInit(): void {
    this.userLoggedIn = this.appService.getUserLoginStatus();


    //reciever block
    this.userLogInSubcription = this.appService.userLoggedIn$.subscribe(data => {
        console.log(data);
        this.userLoggedIn = data;
    });

  }

  changeTab(tabName: string){
    this.onTabChange.emit(tabName);
  }

  logout(){
    this.userLoggedIn = false;
    this.appService.userLoggedIn.next(false);
    this.router.navigateByUrl('/login');
  }
}
