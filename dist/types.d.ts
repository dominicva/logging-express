export interface LogItem {
    name: string;
    value: any;
    description?: string;
}
export declare type Logger = (props: LogItem) => void;
export declare type GenNumberedLogger = (start?: number) => Logger;
