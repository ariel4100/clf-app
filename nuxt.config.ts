// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'CLF Argentina - La Fraternidad de Lideres Cristianos', 
      meta: [
        { name: 'description', content: 'La Fraternidad de Líderes Cristianos (CLF) trabaja bajo un lema: Solo por la Palabra, Solo por la Gracia y Solo por la Fe' },
        { name: 'author', content: 'CLF Argentina' },
        { name: 'keywords', content: 'CLF, Cristianismo, Fraternidad, Líderes Cristianos, Palabra, Gracia, Fe' },
        { name: 'icon', content: 'https://clflatam.org/wp-content/uploads/2015/12/cropped-Favicon-CLF-azul-192x192.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://clflatam.org/wp-content/uploads/2015/12/cropped-Favicon-CLF-azul-192x192.png' }, // Agrega el favicon
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'], 
  devServer: {
    port: 3001,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
   //...
   build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

    , '@nuxtjs/supabase'
    //...
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
