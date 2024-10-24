// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    gaSecret:'',
    public: {
      gaClientId:'',
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    server: {
      hmr: {
        protocol: 'wss'
      }
    }
  }
})