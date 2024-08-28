import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TotoListComponent } from "./toto-list/toto-list.component";
import { NewsComponent } from "./news/news.component";
import { WeatherComponent } from "./weather/weather.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TotoListComponent, NewsComponent, WeatherComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial';
}
