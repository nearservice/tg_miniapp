export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://telegram.org/js/telegram-web-app.js', async: true, defer: true }
      ],
    }
  },
  runtimeConfig: {
    public: {
      s3Url: 'https://85861061-near.s3.timeweb.cloud',
    },
  },
  image: {
    providers: {
      s3Provider: {
        name: 's3Provider',
        provider: '~/providers/s3-provider.ts',
        options: {
          baseURL: "https://85861061-near.s3.timeweb.cloud"
        }
      }
    }
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@use "@/assets/scss/fonts.scss" as *; '
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true }
})
