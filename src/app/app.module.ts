import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarService } from "./shared/components/calendar/calendar.service";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./shared/services/api.service";
import { ErrorService } from "./shared/services/error.service";
import { ErrorModule } from "./shared/components/errors/error.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CalendarService,
    ApiService,
    ErrorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
