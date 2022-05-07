import genLogger from './utils/gen_numbered_logger';
import welcomeLog from './utils/welcome_log';
import composeDataWith from './utils/req_data_compose';
import data from './data';

export default function reqLogger(req, _res, next) {
  welcomeLog();

  const buildMessages = composeDataWith(req);
  const messages = buildMessages(data);

  const customLog = genLogger();
  for (const message of messages) {
    customLog(message);
  }

  next();
}
