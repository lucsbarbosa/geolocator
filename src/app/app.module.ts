import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './pages/app.component';
import { MapComponent } from './components/map/map.component';
import { CardsComponent } from './components/cards/cards.component';

import { ApiService } from './services/api.service';
import { CelsiusPipe } from './pipes/celsius.pipe';

declare global {
  interface country {
    iso: string;
    country: string;
  }
  interface weather {
    climate: string;
    temperature: number;
    feels: number ;
    humidity: number;
    wind: number;
  }
  interface cardInfo {
    country: string;
    location: string;
    weather: weather;
    currency: {
      iso: string;
      value: number
    }
  }
}

@NgModule({
  declarations: [AppComponent, MapComponent, CardsComponent, CelsiusPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    FontAwesomeModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
