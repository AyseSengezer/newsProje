
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Matrix Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' },
    ],
    script: [
      { src: '/js/jquery.min.js'},
      { src: '/js/excanvas.min.js'},
      
      { src: '/js/jquery.ui.custom.js'},
      { src: '/js/bootstrap.min.js'},
      { src: '/js/jquery.flot.min.js'},
      { src: '/js/jquery.flot.resize.min.js'},
      { src: '/js/jquery.peity.min.js'},
      { src: '/js/matrix.js'},
      { src: '/js/matrix.dashboard.js'},
      { src: '/js/jquery.gritter.min.js'},
      { src: '/js/matrix.interface.js'},
      { src: '/js/jquery.validate.js'},
      { src: '/js/matrix.form_validation.js'},
      { src: '/js/jquery.uniform.js'},
      { src: '/js/select2.min.js'},
      { src: '/js/jquery.dataTables.min.js'},
      { src: '/js/matrix.tables.js'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [

    '~/assets/css/bootstrap.min.css',
    '~/assets/css/bootstrap-responsive.min.css',
    '~/assets/css/fullcalendar.css',
    '~/assets/css/matrix-style.css',
    '~/assets/css/matrix-media.css',
    '~/assets/font-awesome/css/font-awesome.css',
    '~/assets/css/jquery.gritter.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // '@plugins/firebase.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
