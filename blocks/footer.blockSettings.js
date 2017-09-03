
const AmlResolver = require("lede").resolvers.AmlResolver;

class SettingsConfig {
  constructor() {
    this.source = new AmlResolver("1jC8Yv57Fp9OlxgZTvrDY2VQHMwLgwkhNLOGNthcBqD8", process.env.GAPI_KEY);
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
