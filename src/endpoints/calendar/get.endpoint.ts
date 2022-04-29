import { EndpointBody, EndpointFunction, EndpointQuery, RequestMethod } from "../types/endpoint.types";

export const endpointUrl: string = 'http://localhost:3000/api/calendar';

export const endpointCalendar: EndpointFunction = (query?: EndpointsCalendarQuery, body?: EndpointsCalendarBody) => ({
  endpointUrl,
  query,
  body,
  method: RequestMethod.GET
});

export interface EndpointsCalendarQuery extends EndpointQuery {}

export interface EndpointsCalendarBody extends EndpointBody {
  year: number,
  month: number,
}
