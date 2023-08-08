export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
