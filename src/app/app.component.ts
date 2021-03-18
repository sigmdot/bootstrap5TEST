import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PruebaBoot5';
  selecc: number = null;

  setSelecc(j: number) {
    this.selecc = j;
    console.log('el seleccionado es = ', this.selecc);
  }

  put(i: number) {
    console.log(i);
  }
}
