import { Component, OnInit } from '@angular/core';
import { getUtcDate } from "./shared/functions/get-utc-date";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentDate: Date;

  public ngOnInit(): void {
    this.currentDate = getUtcDate(new Date());
  }
}
