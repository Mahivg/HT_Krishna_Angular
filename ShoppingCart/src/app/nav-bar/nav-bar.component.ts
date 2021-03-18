import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ht-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('ptitle')
  projectTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
