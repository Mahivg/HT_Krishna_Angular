import { Component } from "@angular/core";

@Component({
  selector: 'my-first', // <my-first> </my-first>
  // templateUrl: './my-first.component.html',
  // styleUrls: ['./my-first.component.css']
  template: `<h1> My first using template </h1>
          <h3 class="red"> Multi line </h3>
  `,

  styles: [`.red { color : red }`]

})
export class MyFirstComponent {

}
