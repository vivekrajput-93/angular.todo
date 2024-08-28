import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = 'ca7e9801579161039cf3a3f954a415af';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName},IN&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}


