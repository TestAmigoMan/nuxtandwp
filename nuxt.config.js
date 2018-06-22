module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'secondproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  css: [
      '~assets/css/materialize.min.css',
      '~assets/css/style.css',
      '~assets/css/font-awesome.min.css',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {
      color: '#ffeb3b',
  },
  /*
  ** Build configuration
  */
  build: {

    vendor: [
        '~/assets/js/jquery-3.3.1.min.js',
        '~/assets/js/materialize.min.js',
        '~/assets/js/init.js',
        'axios'
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
      router: { base: '/nuxtandwp/' },
  }
}
