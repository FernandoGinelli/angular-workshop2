import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { JsonCorreios } from './interfaces/correios.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentTracking: JsonCorreios;

  constructor() {}
}
