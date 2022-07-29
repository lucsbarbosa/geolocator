import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'cep-project';
  markers!: google.maps.LatLngLiteral[];

  handleMarkers(event: google.maps.LatLngLiteral[]) {
    this.markers = event;
  }
}
