const genLogger = require('./utils/gen_numbered_logger');
const welcomeLog = require('./utils/welcome_log');
const composeDataWith = require('./utils/req_data_compose');
const data = require('./data');

function reqLogger(req, _res, next) {
  welcomeLog();

  const buildMessages = composeDataWith(req);
  const messages = buildMessages(data);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }

  next();
}

module.exports = reqLogger;
