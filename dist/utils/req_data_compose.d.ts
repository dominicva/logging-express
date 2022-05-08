import { Request } from 'express';
import { LogItem } from '../types';
interface PropDescriptor {
    prop: string;
    desc: string;
}
declare function reqDataCompose(req: Request | any): (data: PropDescriptor[]) => LogItem[];
export default reqDataCompose;
