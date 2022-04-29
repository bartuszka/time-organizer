export interface DefaultEndpointInterface {
  defaultEndpointInterface?: DefaultEndpointInterface;
}
export interface EndpointQuery {
  [ param: string ]: string | number | boolean;
}
export interface EndpointBody extends DefaultEndpointInterface {}
export interface EndpointReturnedData {
  endpointUrl: string;
  query?: EndpointQuery;
  body?: EndpointBody;
  method: RequestMethod;
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type EndpointFunction = (query?: any, body?: any) => EndpointReturnedData;
