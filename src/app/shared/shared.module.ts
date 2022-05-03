import {NgModule} from "@angular/core";
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CalendarComponent
  ],
  declarations: [
    CalendarComponent,
  ]
})
export class SharedModule {}
