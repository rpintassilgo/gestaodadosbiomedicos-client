export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gestaodadosbiomedicos-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
 '@nuxtjs/auth'
  ],
  axios: {
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8080/gestaodadosbiomedicos/api/',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  ssr: false, // Disable Server Side rendering
  // Auth module configuration (https://auth.nuxtjs.org/)
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/',
      register: '/auth/register'
    },
    watchLoggedIn: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
          method: 'post',
          propertyName: 'token'
        },
        logout: false,
        user: {
          url: '/api/auth/user',
          method: 'get',
          propertyName: ''
        },
        register:{
          url: '/api/auth/register',
          method: 'post',
        }
      },
      // tokenRequired: true, -> default
      // tokenType: 'bearer' -> default
    }
  }
},
router: {
  middleware: [
    'auth'
  ]
},


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
