import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//===========================================
// Contact Form Interface
//===========================================

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const c = new FormControl('');
    //c.setValue(2);
    //c.setValue();
    c.reset();
    console.log(`The value: ${c.value}`);

    const d = new FormControl('start', { nonNullable: true });

    d.reset();
    console.log(`The value: ${d.value}`);
    d.disable();
    console.log(`The value: ${d.getRawValue()}`);
    console.log(`The value: ${d.value}`);
  }
}
