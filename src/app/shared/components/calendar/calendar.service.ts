import { CalendarDay } from "./models/calendar-day";
import {BehaviorSubject, Observable, of} from "rxjs";
import {CalendarState} from "./models/calendar-state";

export class CalendarService {
  public calendarState$: Observable<CalendarState>;

  private calendarStateSubject$: BehaviorSubject<CalendarState>;
  private initialCalendarState: CalendarDay[] = [
    { dayInMonth: 3, complete: false, started: true },
    { dayInMonth: 7, complete: true, started: true },
    { dayInMonth: 15, complete: false, started: false },
    { dayInMonth: 16, complete: false, started: true },
    { dayInMonth: 23, complete: true, started: true }
  ];

  constructor() {
    this.calendarStateSubject$ = new BehaviorSubject<CalendarState>(null);
    this.calendarState$ = this.calendarStateSubject$.asObservable();
  }

  public getDaysForMonth(): Observable<CalendarDay[]> {
    return of(this.initialCalendarState);
  }

  public setState(statePart: Partial<CalendarState>): void {
    const currentState: CalendarState = this.calendarStateSubject$.value;
    this.calendarStateSubject$.next({ ...currentState, ...statePart });
  }
}
