<template>
  <section
    ref="section"
    class="px-5 md:px-10 pt-20 md:pt-32 z-20 overflow-hidden"
  >
    <div class="w-full md:h-auto flex flex-col gap-5 md:gap-10 relative">
      <h2
        ref="sectionTitle"
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400"
        style="-webkit-text-stroke: 0.8px #121212"
      >
        Some projects I've worked on
      </h2>
      <div
        ref="gridContainer"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center h-auto w-full z-10"
      >
        <a
          :href="project?.link === '#' ? null : project?.link"
          :target="project?.link === '#' ? '' : '_blank'"
          v-for="(project, index) in projects"
          :key="index"
          ref="cards"
          class="w-auto h-auto"
        >
          <ProjectCard
            :projectName="project?.projectName"
            :promptText="project?.projectDetails?.prompt"
            :tools="project?.projectDetails?.tools"
            :previewImg="
              project?.preview ? project?.preview : project?.fallback
            "
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ref, onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const section = ref(null);
const sectionTitle = ref(null);

const cards = ref([]);
const gridContainer = ref(null);

onMounted(() => {
  gsap.from(sectionTitle.value, {
    x: "-100%",
    opacity: 0.01,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: sectionTitle.value,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  cards.value.forEach((card) => {
    gsap.from(card, {
      y: 80,
      opacity: 0.01,
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});

const projects = ref([
  {
    projectName: "Onisodumeya",
    projectDetails: {
      prompt: "You're already here",
      tools: ["Nuxt js", "TypeScript", "Tailwindcss"],
    },
    preview:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762189262/onisodumeya-avif_wpv00y.avif",
    fallback:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762187202/Onisodumeya_e1bupe.webp",
    link: "#",
  },
  {
    projectName: "Owosh",
    projectDetails: {
      prompt: "Visit",
      tools: ["Nuxt js", "TypeScript", "Tailwindcss"],
    },
    preview:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762189263/owosh-avif_lhqnif.avif",
    fallback:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762187203/owosh_hjh6hr.webp",
    link: "https://owosh-frontend.vercel.app/",
  },
  {
    projectName: "WalletBits",
    projectDetails: {
      prompt: "Visit",
      tools: ["Nuxt js", "JavaScript", "Tailwindcss"],
    },
    preview:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762189263/walletbits-avif_y6ppwa.avif",
    fallback:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1762187203/walletbits_tlt5ka.webp",
    link: "https://walletbits-app.vercel.app/",
  },
]);
</script>
