// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path'
import fs from 'fs'

const devHost = process.env.NUXT_DEVHOST;
console.log('localHost:', devHost);

export default defineNuxtConfig({
    runtimeConfig: {
        gaSecret: '',
        public: {
            gaClientId: '',
        }
    },
    ...(devHost && {
        devServer: {
            host: devHost,
            https: {
                key: fs.readFileSync(path.resolve(__dirname, `${devHost}.key.pem`), 'utf-8'),
                cert: fs.readFileSync(path.resolve(__dirname, `${devHost}.cert.pem`), 'utf-8')
            }
        }
    }),
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', // '@nuxtjs/tailwindcss',
        '@nuxt/ui', '@nuxtjs/google-fonts'],
    vite: {
        server: {
            hmr: {
                // protocol: 'wss'
            }
        }
    },
    googleFonts: {
        families: {
            Gabarito: true
        }
    }
})