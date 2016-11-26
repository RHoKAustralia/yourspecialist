import { Component } from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
    Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyCFIST5dJ0RxIe5Qxi1EA94OrjOW7tgG68';
  }
}
