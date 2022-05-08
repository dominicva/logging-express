import { LogItem } from '../types';
declare const genNumberedLogger: (itemNum?: number) => ({ name, value, description }: LogItem) => void;
export default genNumberedLogger;
