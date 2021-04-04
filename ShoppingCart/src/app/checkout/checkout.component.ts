import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ht-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  studFG: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.studFG = new FormGroup( {

      name: new FormControl(''),
      age: new FormControl(''),
      address: new FormGroup({
        line1: new FormControl(''),
        line2: new FormControl(''),
        line3: new FormControl('')
      }),
      // line1: new FormControl(''),
      // line2: new FormControl(''),
      // line3: new FormControl('')

    });


    this.studFG.get('age').valueChanges
      .pipe(filter(data => data % 2 == 0), map(data => data + ' + I') )
      .subscribe( data => {
        console.log(data);
    });

  }

  calledWhileTyping() {

    console.log("called...");
  }


  submitSTD() {
    console.log(this.studFG.value);
  }

}
