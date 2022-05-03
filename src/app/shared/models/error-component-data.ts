import {Type} from "@angular/core";
import {ErrorComponent} from "../components/errors/error.component";

export interface ErrorComponentData {
  component: Type<ErrorComponent>,
  closeButtonLabel?: string,
  customButtonLabel?: string,
  callback?: Function
}
