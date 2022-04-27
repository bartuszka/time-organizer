import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page.component";
import { MainPageResolverService } from "./main-page-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: { calendarState: MainPageResolverService }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainPageRoutingModule {}
