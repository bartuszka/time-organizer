import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { getUtcDate } from "./shared/functions/get-utc-date";
import { GeneralErrorPlaceholderDirective } from "./shared/directives/general-error-placeholder.directive";
import { ErrorService } from "./shared/services/error.service";
import { ErrorComponent } from "./shared/components/errors/error.component";
import { ErrorComponentData } from "./shared/models/error-component-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(GeneralErrorPlaceholderDirective) alertHost: GeneralErrorPlaceholderDirective;

  public currentDate: Date;

  public constructor(private errorService: ErrorService) {}

  public ngOnInit(): void {
    this.currentDate = getUtcDate(new Date());

    this.errorService.error$
      .subscribe((errorComponentData: ErrorComponentData) => {
        const { component, closeButtonLabel = null, customButtonLabel = null, callback = null } = errorComponentData;
        const componentRef: ComponentRef<ErrorComponent> = this.alertHost.viewContainerRef
          .createComponent(component);
        componentRef.instance.closeButtonLabel = closeButtonLabel;
        componentRef.instance.customButtonLabel = customButtonLabel;
        componentRef.instance.callback = callback;
        componentRef.instance.modalClosed$
          .subscribe(() => this.alertHost.viewContainerRef.clear());
      });
  }
}
