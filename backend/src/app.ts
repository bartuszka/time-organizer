import express from 'express';

import { endpointUrl, endpointRequest } from './endpoints/calendar';
import * as core from "express-serve-static-core";

export const application: core.Express = express();

application.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

application.use(endpointUrl, endpointRequest);
