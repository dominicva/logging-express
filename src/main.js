const genLogger = require('./utils/gen_numbered_logger');
const welcomeLog = require('./utils/welcome_log');
const data = require('./data');
const composeDataWith = require('./utils/req_data_compose');

function reqLogger(req) {
  welcomeLog();
  const buildMessages = composeDataWith(req);
  const messages = buildMessages(data);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }
}

module.exports = reqLogger;
