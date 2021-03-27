import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  userLoggedIn: boolean;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.appService.getUserLoginStatus();
  }

  changeTab(tabName: string){
    this.onTabChange.emit(tabName);
  }

}
