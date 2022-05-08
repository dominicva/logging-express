declare const genNumberedLogger: (itemNum?: number) => ({ name, value, description }: {
    name: any;
    value: any;
    description: any;
}) => void;
export default genNumberedLogger;
