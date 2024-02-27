// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Digital-Techology ',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [
        { rel: 'icon', href: 'images/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/icons.css' },
      ],
      script: [
        { type: 'text/javascript', src: '/assets/js/vendor/jquery.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/modernizer.min.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/feather.min.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/slick.min.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/bootstrap.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/text-type.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/wow.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/aos.js' },
        { type: 'text/javascript', src: '/assets/js/vendor/particles.js' },
        { type: 'text/javascript', src: '/assets/js/main.js' },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
  '~/assets/css/style.css',
  '~/assets/css/vendor/bootstrap.min.css',
  '~/assets/css/vendor/slick.css',
  '~/assets/css/vendor/slick-theme.css',
  '~/assets/css/vendor/aos.css',
  '~/assets/css/plugins/feature.css',
  
],



  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})