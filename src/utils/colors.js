const chalk = require('chalk'); // pkg to style terminal/console output

// Define colors to make console output friendlier
module.exports = {
  welcome: chalk.black.bgYellowBright.bold,
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
