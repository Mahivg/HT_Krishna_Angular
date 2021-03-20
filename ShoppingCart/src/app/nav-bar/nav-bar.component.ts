import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabName: string){
    this.onTabChange.emit(tabName);
  }

}
