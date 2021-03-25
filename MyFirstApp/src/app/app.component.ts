import { Component } from '@angular/core';
import { MyService } from './services/MyService';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ MyService ]
})
export class AppComponent {
  title = 'MyFirstApp';
}
