
const AmlResolver = require("lede").resolvers.AmlResolver;

class SettingsConfig {
  constructor() {
    this.source = new AmlResolver("1FOFdcp0OFhcSAYhfCNPpAsIWvctULazNDt9bZJyLmGQ", process.env.GAPI_KEY);
    this.template = `<div class="lede-block article-block">
  {% asyncAll $bit in $block.$BITS -%}
    {% BIT $bit %}
  {% endall %}
</div>
`
  ;
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
