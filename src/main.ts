import { Response, Request, NextFunction } from 'express';
import genLogger from './utils/gen_numbered_logger';
import welcomeLog from './utils/welcome_log';
import composeDataWith from './utils/req_data_compose';
import data from './data';

export = reqLogger;

function reqLogger(req: Request, _res: Response, next: NextFunction): void {
  welcomeLog();

  const buildMessages = composeDataWith(req);
  const messages = buildMessages(data);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }

  next();
}
