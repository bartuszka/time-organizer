import {Component, Input, OnInit} from '@angular/core';
import {CalendarDay} from "./models/calendar-day";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public days: CalendarDay[];

  @Input()
  public currentYear: number;

  @Input()
  public currentMonth: number;

  @Input()
  public selectedDays: CalendarDay[];

  public ngOnInit() {
    this.setDays();
  }

  public get rows(): number[] {
    return new Array(Math.ceil(this.days.length / 7)).fill(0)
      .map((row: number, index: number) => index);
  }

  public getDaysForRow(row: number): CalendarDay[] {
    const daysInWeek: number = 7;
    const lastDayInRow: number = row * daysInWeek + daysInWeek;
    const lastDay: number = this.days.length >= lastDayInRow ? lastDayInRow : this.days.length;
    return this.days.slice(row * daysInWeek, lastDay);
  }

  private setDays(): void {
    const daysInMonth: number = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const selectedDayNumbers: number[] = this.selectedDays.map((day: CalendarDay) => day.dayInMonth);

    this.days = (new Array(daysInMonth)).fill(null).map((day: CalendarDay, index: number) => {
      const existingDayIndex: number = selectedDayNumbers.indexOf(index + 1);
      return existingDayIndex !== -1 ? this.selectedDays[existingDayIndex] : CalendarComponent.createEmptyDay(index + 1);
    });
  }

  private static createEmptyDay(dayInMonth: number): CalendarDay {
    return {
      dayInMonth,
      complete: false,
      started: false,
    };
  }
}
