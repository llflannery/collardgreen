
const join = require("path").join;

class SettingsConfig {
  constructor() {
    this.context = {};
    this.script = join(__dirname, "header.js");
    this.style = join(__dirname, "header.scss");
    this.html = join(__dirname, "header.html");
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
