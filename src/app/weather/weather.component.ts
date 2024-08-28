import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers:[WeatherService]
})
export class WeatherComponent {

  cityName: string = '';
  WeatherApi: any;

  constructor(private weatherService: WeatherService) {}

  handleSearch() {
    this.weatherService.getWeather(this.cityName)
      .subscribe(
        data => {
          this.WeatherApi = data;
          console.log(this.WeatherApi);
        },
        error => {
          console.error('Error fetching weather data:', error);
        }
      );
  }

  convertToCelsius(temp: number): number {
    return Math.round(temp - 273.15);
  }

  getWeatherIcon(): string {
    const iconCode = this.WeatherApi.weather[0].icon;
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
