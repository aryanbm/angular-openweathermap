import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherDetail } from '../models/weather-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  
  getWeather() {
   return this.httpClient.get<weatherDetail>('https://api.openweathermap.org/data/2.5/weather?lat=37.2682&lon=49.5891&appid=5963b44dc023100a2270dac5c0a9ae1e&units=metric');
  }

}
