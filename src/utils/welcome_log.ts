import colors from './colors';
const { welcome } = colors;
const { log } = console;

const welcomeLog = () =>
  log(
    `\n${welcome.heading(
      ` Let's take a closer look at some \n 'stuff' on the express request object `
    )}\n\nPlease note that in order to log non-primitive values properly they have been passed through JSON.stringify. In case you were wondering why objects had double quotes everywhere...\n`
  );

export default welcomeLog;
