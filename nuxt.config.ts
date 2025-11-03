// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
  runtimeConfig: {
    public: {
      siteUrl: "https://onisodumeya/vercel.app",
      emailServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },
  sitemap: {
    defaults: {
      changefreq: "monthly",
      priority: 1.0,
    },
  },
  app: {
    head: {
      title: "Onisodumeya | Frontend Developer",
      meta: [
        {
          name: "description",
          content:
            "I build mordern, responsive websites for businesses that converts visitors to customers.",
        },
        { name: "author", content: "Onisodumeya Mazi" },
        { name: "theme-color", content: "#121212" },
        {
          name: "keywords",
          content:
            "frontend developer, web developer, SEO websites, responsive design, landing page developer, business website, marketing website, web designer",
        },
        { property: "og:title", content: "Onisodumeya's Portfolio" },
        { property: "og:description", content: "Frontend web developer" },
        { property: "og:image", content: "/preview.jpg" },
        { property: "og:type", content: "website" },
      ],

      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
