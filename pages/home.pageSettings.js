
// PAGE CONFIG
const BLOCKS = [
  // `collardgreen/header`,
  `collardgreen/home`,
  `collardgreen/footer`
];
const STYLES = [
  { id: "collardgreen/styles.scss" },
];
const SCRIPTS = [];
const ASSETS = [];
const HEAD_RESOURCES = [];
const BODY_RESOURCES = [];
const META = [];

// SEO GOODNESS – make sure this is up-to-date before project launch
const PROJ_NAME = "collardgreen";
const SECTION = "";
const WEBHED = ""; // serves a FB title, social hed and analytics
const TWHED = ""; // serves as Twitter title if different than FB title.
const DESCRIPTION = "";
const YEAR = "2017";
const NAME = "";
const DEPLOY_PATH = "";
const URL = `http://www.tampabay.com/projects/${YEAR}/${SECTION.toLowerCase()}/${PROJ_NAME.toLowerCase()}/${DEPLOY_PATH}`;
const SOCIAL_IMG = "";
const IMG_WIDTH = "1200";
const IMG_HEIGHT = "630";
const AUTHOR = "";
const TITLE = `${PROJ_NAME} | ${SECTION} | Tampa Bay Times`;

// THE NITTY GRITTY – If everything above is set correctly, you shouldn't have to edit anything below this line

class SettingsConfig {
  constructor() {
    this.deployPath = DEPLOY_PATH;
    this.blocks = BLOCKS;
    this.materials = {
      scripts: SCRIPTS,
      styles: STYLES,
      assets: ASSETS
    };
    this.resources = {
      head: [
        ...HEAD_RESOURCES,
        '<script type="text/javascript" src="//cdn.gigya.com/js/gigya.js?apiKey=2_XVvcxIxG8cRaBYq3JyWKVSDhHbrBDJ78qOERcKaeWBTVH-aNjJPONe-sqQjvKmOp"></script>',
        '<script type="text/javascript" src="//www.tampabay.com/projects/assets/analytics.js"></script>'
      ],
      body: [
        ...BODY_RESOURCES,
      ]
    };
    this.meta = [
      ...META,
      // COMMON
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        content: "IE=edge",
        props: [
          { attr: "http-equiv", val: "X-UA-Compatible" }
        ]
      },
      {
        props: [
          { attr: "charset", val: "UTF-8" }
        ]
      },
      // TWITTER
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@TB_Times"
      },
      {
        name: "twitter:title",
        content: TWHED || WEBHED
      },
      {
        name: "twitter:description",
        content: DESCRIPTION
      },
      {
        name: "twitter:image",
        content: SOCIAL_IMG
      },

      // OG
      {
        name: "og:url",
        content: URL
      },
      {
        name: "og:type",
        content: "article"
      },
      {
        name: "og:title",
        content: WEBHED
      },
      {
        name: "og:description",
        content: DESCRIPTION
      },
      {
        name: "og:image",
        content: SOCIAL_IMG
      },
      {
        name: "og:image:width",
        content: IMG_WIDTH
      },
      {
        name: "og:image:height",
        content: IMG_HEIGHT
      }
    ];
    this.context = {
      seo: {
        title: TITLE,
        url: URL,
        image: SOCIAL_IMG,
        webhed: WEBHED
      },
      omniture: {
        section: SECTION,
        byline: AUTHOR,
        year: YEAR
      }
    };
  }
}
// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
