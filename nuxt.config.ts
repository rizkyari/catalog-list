// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },
  plugins: ['~/plugins/pinia.js','~/plugins/axios.js'],
  modules: ['@nuxt/image'],
  css: ['@/assets/styles/main.scss'],
})