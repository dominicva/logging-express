import { Request } from 'express';
import { LogItem, PropDescriptor } from '../types';
declare function reqDataCompose(req: Request | any): (data: PropDescriptor[]) => LogItem[];
export default reqDataCompose;
