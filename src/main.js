const genLogger = require('./utils/gen_numbered_logger');
const welcomeLog = require('./utils/welcome_log');
const composeDataWith = require('./utils/req_data_compose');

function reqLogger(req) {
  welcomeLog();
  const messageBuilder = composeDataWith(req);
  const messages = messageBuilder(logData);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }
}

module.exports = reqLogger;
