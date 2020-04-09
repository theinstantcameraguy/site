// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/main.scss'),
      ],
    })
}

module.exports = {
  siteName: 'The Instant Camera Guy',
  siteUrl: 'https://theinstantcameraguy.com',
  plugins: [
    'gridsome-plugin-robots-txt',
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://graphql.datocms.com/',
        fieldName: 'datoCMSGL',
        typeName: 'datoGQL',

        headers: {
          Authorization: `Bearer ${process.env.DATOCMS_API}`,
        },
      },
    },
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: 'ba33398bd4b097bda2e657817bea1b', // required
        previewMode: false,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'The Instant 📷 Guy',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: true,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'T.I.📷.G',
        themeColor: '#00B140',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#00B140'
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
        .resourceQuery(/inline/)
        .use('babel-loader')
        .loader('babel-loader')
        .end()
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });

    const imgRule = config.module.rule('image-processor')
    imgRule.uses.clear()
    imgRule.test(/\.(gif|png|jpe?g)$/i)
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .oneOf('external')
      .use('file-loader').loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        },
        name: 'assets/[name].[hash:8].[ext]',
      });
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }

};
