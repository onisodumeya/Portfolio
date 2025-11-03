<template>
  <div
    class="relative h-auto max-w-screen overflow-x-hidden bg-gray-200 text-[#1b1b1b]"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import "../assets/css/cursor.css";
import { ref, onMounted } from "vue";

// Meta & Title
useHead({
  link: [
    {
      rel: "preload",
      href: "/_nuxt/default.css",
      as: "style",
      onload: "this.onload=null;this.rel='stylesheet'",
    },
    {
      rel: "preload",
      href: "/_nuxt/entry.css",
      as: "style",
      onload: "this.onload=null;this.rel='stylesheet'",
    },
  ],
  title: "Onisodumeya | Frontend Developer",
  meta: [
    {
      name: "description",
      content:
        "I build mordern, responsive websites for businesses that converts visitors to customers.",
    },
    { property: "og:title", content: "Onisodumeya's Portfolio" },
    { property: "og:description", content: "Frontend web developer" },
    { property: "og:image", content: "/preview.jpg" },
    { property: "og:type", content: "website" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Onisodumeya Mazi",
        jobTitle: "Frontend Developer & UI/UX Designer",
        url: "https://onisodumeya.vercel.app",
        description: "I build fast, conversion-driven business websites.",
        knowsAbout: ["Frontend Development", "UI Design", "SEO"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
        },
      }),
    },
  ],
});

onMounted(() => {
  const originalTitle = document.title;
  console.log(originalTitle);

  window.addEventListener("blur", () => {
    document.title = "Come back! 👀";
  });

  window.addEventListener("focus", () => {
    document.title = originalTitle;
  });
});
</script>
