import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { CommonModule } from "@angular/common";
import { MainPageRoutingModule } from "./main-page-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MainPageResolverService } from "./main-page-resolver.service";

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    MainPageComponent,
  ],
  providers: [
    MainPageResolverService,
  ]
})
export class MainPageModule {}
