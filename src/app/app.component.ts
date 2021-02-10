import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-blog';
  results;
  constructor(http: HttpClient) {
    this.results = http.get("http://localhost:5001/angular-blog-14cef/us-central1/api/database_ref")
  }
}
