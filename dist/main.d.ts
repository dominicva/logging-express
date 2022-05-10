import { Response, Request, NextFunction } from 'express';
declare function reqLogger(req: Request, _res: Response, next: NextFunction): void;
export = reqLogger;
