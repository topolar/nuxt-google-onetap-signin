// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path'
import fs from 'fs'

export default defineNuxtConfig({
    runtimeConfig: {
        gaSecret: '',
        public: {
            gaClientId: '',
        }
    },

    devServer: {
        host: 'local.mistergroup.org',
        port: 443, // Does not work due bug in nuxt, must be set in commandline
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'mistergroup_org_key.pem'), 'utf-8'),
            cert: fs.readFileSync(path.resolve(__dirname, 'mistergroup_org_cert.pem'), 'utf-8')
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        // '@nuxtjs/tailwindcss',
        '@nuxt/ui'
    ],
    vite: {
        server: {
            hmr: {
                // protocol: 'wss'
            }
        }
    }
})