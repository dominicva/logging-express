import { Response, Request, NextFunction } from 'express';
export = reqLogger;
declare function reqLogger(req: Request, _res: Response, next: NextFunction): void;
