export interface EndpointQuery {
  [ param: string ]: string | number | boolean;
}

export interface EndpointBody {
  [ key: string ]: any;
}

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
