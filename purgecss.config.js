module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
    './node_modules/buefy/src/components/icon/*.vue',
    './node_modules/buefy/src/components/carousel/*.vue',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
    'svg-inline--fa',
    'vue-lazyload-bg-img',
    'vue-markdown',
    'datocms-img',
    'b-carousel',
    'b-carousel-item'
  ],
  whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/,
    /^navbar-/,
    /^has-text-/,
    /^fa-/,
    /^has-numberinput-/,
    /shiki/
  ],
  defaultExtractor (content) {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
  },
  extractors: [
    {
      extractor: content => content.match(/[A-z0-9-:\\/]+/g),
      extensions: ['vue', 'js', 'jsx', 'md', 'html'],
    },
  ],
}
