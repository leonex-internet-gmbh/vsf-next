import webpack from 'webpack';

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',
        content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  plugins: [
    './plugins/magento.js'
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'router',
        path: '*',
        component: resolve(__dirname, '.theme/pages/Router.vue')
      });
    }
  },
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    ['@vue-storefront/nuxt', {
      coreDevelopment: true,
      useRawSource: {
        dev: [
          '@vue-storefront/magento',
          '@vue-storefront/core'
        ],
        prod: [
          '@vue-storefront/magento',
          '@vue-storefront/core'
        ]
      }
    }],
    ['@vue-storefront/nuxt-theme', {
      apiClient: '@vue-storefront/magento-api',
      composables: '@vue-storefront/magento'
    }]
  ],
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'http://demoshops.splendid-internet.de/magento/demoshop-magento2-daily/',
      pathRewrite: {
        '^/api': '/graphql'
      }
    }
  },
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome 1'
        },
        de: {
          welcome: 'Welcome 2'
        }
      }
    }
  }
};
