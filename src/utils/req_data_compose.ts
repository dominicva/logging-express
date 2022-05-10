import { Request } from 'express';
import { LogItem, PropDescriptor } from '../types';

/*
Note param signature (req: Request | any)
ts didn't like using a string to access a property on Request type... let the learning continue!
*/
function reqDataCompose(req: Request | any) {
  return function (data: PropDescriptor[]) {
    return data.map(
      ({ prop, desc }): LogItem => ({
        name: `req.${prop}`,
        value: req[prop],
        description: desc,
      })
    );
  };
}

export default reqDataCompose;
