import * as chalk from 'chalk';

interface ColorConfig {
  [key: string]: {
    text?: Function;
    heading?: Function;
  };
}

const colorPalette: ColorConfig = {
  welcome: {
    text: chalk.yellowBright.bold,
    heading: chalk.black.bgYellowBright.bold,
  },
  success: {
    text: chalk.green,
    heading: chalk.black.bold.bgGreenBright,
  },
  info: {
    text: chalk.blue,
    heading: chalk.black.bold.bgBlueBright,
  },
  warning: {
    text: chalk.hex('#FFA500'),
    heading: chalk.white.bgHex('#FFA500'),
  },
  regular: {
    text: chalk.white,
    metaData: chalk.yellowBright,
  },
};

export default colorPalette;
