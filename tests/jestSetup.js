import fetch, { Headers, Request, Response } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
