import { HttpErrorResponse } from "@angular/common/http";
import { GeneralErrors } from "../models/general-errors";
import {Observable, Subject} from "rxjs";
import {ErrorComponentData} from "../models/error-component-data";

export class ErrorService {
  private errorSubject$: Subject<ErrorComponentData> = new Subject<ErrorComponentData>();
  public error$: Observable<any> = this.errorSubject$.asObservable();

  public isGeneralError(error: HttpErrorResponse): boolean {
    return !!(<number[]>Object.values(GeneralErrors).filter(Number)).find((status: number) => status === error.status);
  }

  public showErrorModal(errorComponentData: ErrorComponentData): void {
    this.errorSubject$.next({ ...errorComponentData });
  }
}
