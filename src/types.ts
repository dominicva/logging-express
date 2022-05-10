export type Logger = (props: LogItem) => void;
export type GenNumberedLogger = (start?: number) => Logger;

export interface LogItem {
  name: string;
  value: any;
  description?: string;
}

export interface PropDescriptor {
  prop: string;
  desc: string;
}
