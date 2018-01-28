
const join = require("path").join;

class SettingsConfig {
  constructor() {
    this.context = {};
    this.script = join(__dirname, "embedpdf.js");
    this.style = join(__dirname, "embedpdf.scss");
    this.html = join(__dirname, "embedpdf.html");
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
