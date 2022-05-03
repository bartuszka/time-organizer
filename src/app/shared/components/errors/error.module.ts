import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorModalComponent } from "./error-modal/error.modal.component";
import {GeneralErrorComponent} from "./general-error/general-error.component";
import {GeneralErrorPlaceholderDirective} from "../../directives/general-error-placeholder.directive";
import {ErrorComponent} from "./error.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ErrorComponent,
    GeneralErrorPlaceholderDirective,
    ErrorModalComponent,
    GeneralErrorComponent,
  ],
  exports: [
    ErrorComponent,
    GeneralErrorPlaceholderDirective,
    ErrorModalComponent,
    GeneralErrorComponent,
  ],
})
export class ErrorModule {}
