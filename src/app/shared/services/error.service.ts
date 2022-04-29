import { HttpErrorResponse } from "@angular/common/http";
import { GeneralErrors } from "../models/general-errors";

export class ErrorService {
  public isGeneralError(error: HttpErrorResponse): boolean {
    return !!Object.values(GeneralErrors).filter(Number).find((status: number) => status === error.status);
  }
}
