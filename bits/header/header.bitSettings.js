
const join = require("path").join;

class SettingsConfig {
  constructor() {
    this.context = {
        baseHref: "//tampabay.com",
        projectHref: "//",
        brandName: "Tampa Bay Times",
        brandLogoWideWhite: "http://tampabay.com/projects/assets/tampabaytimes_white.svg",
        brandLogoSmallWhite: "http://tampabay.com/projects/assets/logo-t.svg",
        brandLogoStackedWhite: "http://tampabay.com/projects/assets/times_logo_stacked_white.svg",
        shareSocialIconsFbUp: "//www.tampabay.com/projects/assets/sharing/fb_wh.svg",
        shareSocialIconsFbOver: "//www.tampabay.com/projects/assets/sharing/fb_blWh.svg",
        shareSocialIconsTwUp: "//www.tampabay.com/projects/assets/sharing/tw_wh.svg",
        shareSocialIconsTwOver: "//www.tampabay.com/projects/assets/sharing/tw_blWh.svg",
        shareSocialIconsEmailUp: "//www.tampabay.com/projects/assets/sharing/email_wh.svg",
        shareSocialIconsEmailOver: "//www.tampabay.com/projects/assets/sharing/email_blWh.svg",
        shareSocialIconsMoreUp: "//www.tampabay.com/projects/assets/sharing/more_wh.svg",
        shareSocialIconsMoreOver: "//www.tampabay.com/projects/assets/sharing/more_blWh.svg"
    };
    this.script = join(__dirname, "header.js");
    this.style = join(__dirname, "header.scss");
    this.html = join(__dirname, "header.html");
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
