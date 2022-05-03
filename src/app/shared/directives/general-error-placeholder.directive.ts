import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[generalErrorPlaceholder]'
})
export class GeneralErrorPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
