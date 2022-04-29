import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {
  EndpointReturnedData,
  RequestMethod
} from "../../../endpoints/types/endpoint.types";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  public request<T>(endpointData: EndpointReturnedData): Observable<T> {
    let queryParams: HttpParams = new HttpParams();

    if (endpointData.query) {
      Object.keys(endpointData.query).forEach((key: string) => queryParams = queryParams.append(key, endpointData.query[key]));
    }

    if (endpointData.method === RequestMethod.GET) {
      return this.http.get<T>(endpointData.endpointUrl, { params: queryParams })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.log(this.errorService.isGeneralError(error));
            console.log('ERROR');
            return EMPTY;
          })
        );
    }

    if (endpointData.method === RequestMethod.DELETE) {
      return this.http.delete<T>(endpointData.endpointUrl, { params: queryParams });
    }

    if (endpointData.method === RequestMethod.POST) {
      return this.http.post<T>(endpointData.endpointUrl, { ...(endpointData.body ? endpointData.body : {}) }, { params: queryParams });
    }

    if (endpointData.method === RequestMethod.PUT) {
      return this.http.put<T>(endpointData.endpointUrl, { ...(endpointData.body ? endpointData.body : {}) }, { params: queryParams });
    }

    if (endpointData.method === RequestMethod.PATCH) {
      return this.http.patch<T>(endpointData.endpointUrl, { ...(endpointData.body ? endpointData.body : {}) }, { params: queryParams });
    }

    return EMPTY;
  };
}
