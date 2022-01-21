import { weatherDetail } from '../models/weather-model';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  weatherDetails! : weatherDetail;
  idFirstDigit!: number;
  

  constructor(private weather: WeatherService) { 
  }

  ngOnInit(): void {
    this.weather.getWeather().subscribe(result => {
     this.weatherDetails =  new weatherDetail(result);
    });
    this.idFirstDigit = +this.weatherDetails.weatherID.substring(0, 1);
  }
  switchICon() {
    switch(this.idFirstDigit){
      case 2:
        return "assets/thunderstrom.svg";
      case 3:
        return "assets/drizzle.svg";
      case 4:
        return "assets/showers.svg";
      case 5:
        return "assets/snow.svg";
      case 6:
        return "assets/windy.svg";
      case 7:
        return "assets/clear-cloudy.svg";
    }

    return "assets/clear-cloudy.svg";
    
  }
  
}
