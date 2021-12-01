const chalk  = require('chalk');
const log = console.log;
let debugSwitch = false;

const switchDebug = (debug) => {
  debugSwitch = debug;
};

const debugError = (type, msg) => {
  if (!msg) {
    msg = type;
    type = 'common';
  }
  debugSwitch && log(chalk.bgBlueBright(`[wp2vite-${type}]:`) + chalk.red(msg));
};

const debugInfo = (type, msg) => {
  if (!msg) {
    msg = type;
    type = 'common';
  }
  debugSwitch && log(chalk.bgBlueBright(`[wp2vite-${type}]:`) + chalk.green(msg));
};

const debugWarning = (type, msg) => {
  if (!msg) {
    msg = type;
    type = 'common';
  }
  log(chalk.bgBlueBright(`[wp2vite-${type}]:`) + chalk.yellow(msg));
};

module.exports = {
  switchDebug,
  debugInfo,
  debugError,
  debugWarning,
};
