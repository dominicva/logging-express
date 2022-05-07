import colors from './colors';
const { info, regular, success, warning } = colors;
const { log } = console;

const genNumberedLogger =
  (itemNum = 0) =>
  ({ name, value, description }) => {
    log(
      `${info.heading(` ${itemNum++}. ${name} `)}\n\n${info.text(
        description
      )}\n`
    );

    log(
      `${regular.text(
        `Type: ${regular.metaData(typeof value)}\nCurrent ${name} value:`
      )} ${
        value ? success.text(JSON.stringify(value)) : warning.text(value)
      }\n\n`
    );
  };

export default genNumberedLogger;
