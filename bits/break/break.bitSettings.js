
const join = require("path").join;

class SettingsConfig {
  constructor() {
    this.context = {};
    this.script = join(__dirname, "break.js");
    this.style = join(__dirname, "break.scss");
    this.html = join(__dirname, "break.html");
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
