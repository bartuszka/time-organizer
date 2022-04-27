import { Resolve } from "@angular/router";
import { CalendarDay } from "../shared/components/calendar/models/calendar-day";
import { filter, Observable, take } from "rxjs";
import { CalendarService } from "../shared/components/calendar/calendar.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MainPageResolverService implements Resolve<CalendarDay[]>{
  constructor(private calendarService: CalendarService) {}

  resolve(): Observable<CalendarDay[]> {
    return this.calendarService.getDaysForMonth()
      .pipe(
        filter(Boolean),
        take(1)
      );
  }
}
