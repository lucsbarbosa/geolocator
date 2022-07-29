import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent {
  @Output() markersSelected = new EventEmitter<google.maps.LatLngLiteral[]>();
  markers: google.maps.LatLngLiteral[] = [];

  constructor() {}

  handleClick(event: google.maps.MapMouseEvent) {
    this.updateMarkers(event.latLng!.lat(), event.latLng!.lng());
    if (this.markers.length == 2) {
      this.markersSelected.emit(this.markers);
    }
  }

  updateMarkers(lat: number, lng: number) {
    if (this.markers.length == 2) {
      this.markers = [];
    }
    this.markers.push({
      lat: lat,
      lng: lng,
    });
  }
}
