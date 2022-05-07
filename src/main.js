const genLogger = require('./utils/gen_numbered_logger');
const welcomeLog = require('./utils/welcome_log');
const composeDataWith = require('./utils/req_data_compose');
const data = require('./data');

function reqLogger(req) {
  welcomeLog();

  const buildMessages = composeDataWith(req);
  const messages = buildMessages(data);
  console.log('messages:', messages);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }
}

module.exports = reqLogger;
