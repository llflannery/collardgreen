
class SettingsConfig {
  constructor() {
    this.deployRoot = "some-seo-root-path-here";
    this.version = 1;
    this.defaults = {
      scripts: [],
      assets: [],
      styles: [],
      blocks: [],
      metaTags: [],
      resources: [
        {
          head: [],
          body: []
        }
      ]
    };
    this.context = {};
    this.template = function({styles, scripts, context}) {
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{ $PAGE.seo.title }}</title>
    {% for item in $PAGE.$meta -%}
    <meta{% if item.name %} name="{{ item.name }}"{%- endif -%}{%if item.content %} content="{{ item.content }}"{%- endif -%}{% if item.props | length %}{% for prop in item.props %} {{ prop.attr }}="{{ prop.val }}"{% endfor %}{%- endif -%} />
    {% endfor -%}
    {% if $PROJECT.$debug -%}
    <meta name="ROBOTS" Content="NOINDEX, NOFOLLOW">
    {%- endif %}
    <style type="text/css">
      ${ styles }
    </style>
    <style type="text/css">
    {% for $block in $BLOCKS -%}
    {% for $bit in $block.$BITS -%}
    {% if $bit.$name == "img-fixed" -%}
    @media only screen { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/480/{{ $bit.src | urlencode }}.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 481px), screen and (min-height: 321px) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/600/{{ $bit.src | urlencode }}.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 601px), screen and (min-height: 401px) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1024/{{ $bit.src | urlencode }}.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 1025px), screen and (min-height: 682px) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1500/{{ $bit.src | urlencode }}.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    {#- lede image still gets pretty big pic on mobile devices -#}
    {% if not $bit.hed -%}
    @media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) { {% if $bit.srcid %}.ios #{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}.ios #{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/480/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 481px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 481px) and (min-resolution: 192dpi), { {% if $bit.srcid %}.ios #{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}.ios #{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/600/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 601px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 401px) and (min-resolution: 192dpi), { {% if $bit.srcid %}.ios #{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}.ios #{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1024/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 1500px), screen and (min-height: 1000px), screen and (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 1025px) and (min-resolution: 192dpi), { {% if $bit.srcid %}.ios #{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}.ios #{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1500/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    {%- endif -%}
    {# smallifying code for mobile devices follows #}
    @media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/480/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 481px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-height: 321px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 481px) and (min-resolution: 192dpi), screen and (min-height: 321px) and (min-resolution: 192dpi) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/600/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 601px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-height: 401px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 401px) and (min-resolution: 192dpi), screen and (min-height: 682px) and (min-resolution: 192dpi) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1024/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    @media only screen and (min-width: 1500px), screen and (min-height: 1000px), screen and (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-height: 1000px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 1025px) and (min-resolution: 192dpi), screen and (min-height: 1000px) and (min-resolution: 192dpi) { {% if $bit.srcid %}#{{ $bit.srcid | slugify({ replacement: "_", lower: true })}}{% else %}#{{ $bit.src | slugify({ replacement: "_", lower: true })}}{%- endif -%}.fixedimg .image { background-image: url(//s3.amazonaws.com/ledejs/resized/{{ $PROJECT.$name | urlencode }}/1500/{{ $bit.src | urlencode }}-2x.{% if $bit.imgtype %}{{ $bit.imgtype }}{% else %}jpg{% endif %}); } }
    {%- endif %}
    {%- endfor %}
    {%- endfor %}
    </style>
    {% if $PAGE.$resources and $PAGE.$resources.head -%}
    {% for resource in $PAGE.$resources.head -%}
    {{ resource }}
    {% endfor %}
    {%- endif -%}
  </head>
  <body>
    ${ context.$PAGE.$template }
  {%- if $PAGE.$resources and $PAGE.$resources.body %}
  {%- for resource in $PAGE.$resources.body -%}
  {{ resource }}
  {%- endfor %}
  {%- endif -%}
  <script type="text/javascript" src="scripts.js"></script>
    {% if $PROJECT.$debug %}
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(":")[0] +
      ':35729/livereload.js?snipver=1"></' + 'script>');
  </script>
  {% endif -%}
  </body>
  </html>`
  ;}
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
// These two lines are necessary for lede to pull in this module at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsConfig;
