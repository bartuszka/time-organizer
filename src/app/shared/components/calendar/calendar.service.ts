import { CalendarDay } from "./models/calendar-day";
import {BehaviorSubject, Observable, pluck, tap} from "rxjs";
import { CalendarState } from "./models/calendar-state";
import { Injectable } from "@angular/core";
import {ApiService} from "../../services/api.service";
import {endpointCalendar} from "../../../../endpoints/calendar/get.endpoint";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CalendarService {
  public calendarState$: Observable<CalendarState>;

  private calendarStateSubject$: BehaviorSubject<CalendarState>;
  private emptyState: CalendarState = {
    selectedDays: [],
  }

  constructor(private httpClient: HttpClient, private apiService: ApiService) {
    this.calendarStateSubject$ = new BehaviorSubject<CalendarState>(this.emptyState);
    this.calendarState$ = this.calendarStateSubject$.asObservable();
  }

  public getDaysForMonth(): Observable<CalendarDay[]> {
    return this.apiService.request<{ days: CalendarDay[] }>(endpointCalendar({ year: 1, month: 3 }, { year: 1, month: 3 }))
      .pipe(
        tap(data => console.log(data)),
        pluck('days')
      );
  }

  public setState(statePart: Partial<CalendarState>): void {
    const currentState: CalendarState = this.calendarStateSubject$.value;
    this.calendarStateSubject$.next({ ...currentState, ...statePart });
  }
}
