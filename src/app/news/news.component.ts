import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],  // Corrected to styleUrls
})
export class NewsComponent implements OnInit {
  newsLine: any;
  isLoading: boolean = true;

  ngOnInit() {
    this.getApiResponse();
  }

  getApiResponse() {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=796d9a3c17cc410aae2f7ddbc1397144'
    )
      .then((response) => response.json())
      .then((data) => {
        this.newsLine = data;
        this.isLoading = false;
      })
      .catch((error) => {  // Moved error handling to catch block
        alert(error);
        this.isLoading = false;
      });
  }
}
