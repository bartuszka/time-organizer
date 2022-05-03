import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CalendarDay} from "../shared/components/calendar/models/calendar-day";
import {CalendarService} from "../shared/components/calendar/calendar.service";
import {Observable, pluck} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public selectedDays$: Observable<CalendarDay[]>;

  constructor(
    private route: ActivatedRoute,
    private calendarService: CalendarService
  ) {
    this.calendarService.setState({ selectedDays: this.route.snapshot.data['calendarState'] });
  }

  public ngOnInit() {
    this.selectedDays$ = this.calendarService.calendarState$
      .pipe(pluck('selectedDays'));
  }
}
