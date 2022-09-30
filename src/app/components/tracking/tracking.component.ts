import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonCorreios } from '../../interfaces/correios.interface';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
})
export class TrackingComponent implements OnInit {
  currentTracking: JsonCorreios;

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  track(packageId: string) {
    const url = `https://tracking-5hr0.onrender.com/api/correios/${packageId}`;
    this.http.get<JsonCorreios>(url).subscribe((response) => {
      this.currentTracking = response;
    });
  }
}
