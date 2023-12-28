import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Calculator',
        short_name: 'Calculator',
        description: 'Calculator Application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        lang: "en",
        dir: 'ltr',
        start_url: ".",
        icons: [
          {
            src: "assets/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable any"
          },
          {
            src: "assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any"
          }
        ]
      },
      injectRegister: 'inline',
      // registerType: 'autoUpdate',
      // injectRegister: 'auto',
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: new RegExp('.*'),
      //       handler: 'NetworkFirst' //NetworkFirst  or  CacheFirst
      //     }
      //   ],
        
      //   skipWaiting: true,
      //   clientsClaim: true,
      //   sourcemap: true,
      //   cleanupOutdatedCaches: false,
      //   globPatterns: [
      //     'assets/*.{js,css,html,ico,png,svg, png, jpg}',
      //     '*.{js,css,html,ico,png,svg, png, jpg}'
      //   ]
      // },
      // devOptions: {
      //   enabled: true
      // }
    })
  ]
})