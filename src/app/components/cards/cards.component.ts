import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  faDroplet,
  faWind,
  faThermometer,
  faTemperatureHalf,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent implements OnInit {
  faDroplet = faDroplet;
  faWind = faWind;
  faThermometer = faThermometer;
  faTemperatureHalf = faTemperatureHalf;
  faCloudSun = faCloudSun;

  @Input() marker!: google.maps.LatLngLiteral;
  cardInfo: cardInfo = {
    country: '',
    location: '',
    weather: {
      climate: '',
      temperature: 0,
      feels: 0,
      humidity: 0,
      wind: 0,
    },
    currency: {
      iso: '',
      value: 0,
    },
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .getWeather(this.marker.lat, this.marker.lng)
      .subscribe((weather) => {
        this.cardInfo.location = weather.name;
        this.updateWeatherType(weather);
      });
    this.api
      .getCountry(this.marker.lat, this.marker.lng)
      .subscribe((country) => {
        this.cardInfo.country =
          country.results[0].address_components[0].long_name;
        this.api.getCurrency(this.cardInfo.country)!.subscribe((currency) => {
          this.cardInfo.currency.iso = currency[0].code;
          this.cardInfo.currency.value = Number(currency[0].ask);
        });
      });
  }

  updateWeatherType(params: any): void {
    const weatherRef = this.cardInfo.weather;
    weatherRef.climate = params.weather[0].main;
    weatherRef.temperature = params.main.temp;
    weatherRef.feels = params.main.feels_like;
    weatherRef.humidity = params.main.humidity;
    weatherRef.wind = params.wind.speed;
  }
}
