import { Component } from '@angular/core';
import {ErrorComponent} from "../error.component";

@Component({
  selector: 'app-errors',
  templateUrl: './general-error.component.html',
  styleUrls: ['./general-error.component.scss']
})
export class GeneralErrorComponent extends ErrorComponent {}
