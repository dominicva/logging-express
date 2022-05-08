import chalk from 'chalk';
interface ColorConfig {
    [key: string]: {
        [index: string]: chalk.Chalk;
    };
}
declare const colorPalette: ColorConfig;
export default colorPalette;
