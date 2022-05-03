import {Component} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-error-actions',
  template: ''
})
export class ErrorComponent {
  private modalClosedSubject$: Subject<void> = new Subject<void>();
  public modalClosed$: Observable<void> = this.modalClosedSubject$.asObservable();
  public closeButtonLabel: string;
  public customButtonLabel: string;
  public callback: Function;

  public close(): void {
    this.modalClosedSubject$.next();
    this.modalClosedSubject$.complete();
  }

  public onExecuteCustomAction(): void {
    this.callback();
  }
}
