<template>
  <section ref="section" class="px-5 md:px-10">
    <div
      class="w-full md:h-auto flex flex-col gap-5 p-5 md:py-10 md:px-10 bg-black rounded-xl relative overflow-hidden"
    >
      <h2
        ref="sectionTitle"
        class="text-6xl md:text-8xl lg:text-9xl font-bold text-white/80"
      >
        WORK
      </h2>
      <div
        ref="gridContainer"
        class="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center h-full w-full z-10"
      >
        <a
          :href="project.link"
          target="_blank"
          v-for="(project, index) in projects"
          :key="index"
          ref="cards"
          class="w-auto h-auto"
        >
          <ProjectCard
            :projectName="project.projectName"
            :promptText="project.projectDetails.prompt"
            :tools="project.projectDetails.tools"
            :previewImg="project.preview"
          />
        </a>
      </div>
      <div
        class="absolute z-0 h-full w-full top-0 left-0 bg-cover bg-no-repeat opacity-15"
        :style="`background: url(${noise})`"
      ></div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ref, onMounted } from "vue";
import noise from "../../assets/images/6mcf62RlDfRfU61Yg5vb2pefpi4.avif";

gsap.registerPlugin(ScrollTrigger);

const section = ref(null);
const sectionTitle = ref(null);

const cards = ref([]);
const gridContainer = ref(null);

onMounted(() => {
  gsap.from(section.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(sectionTitle.value, {
    x: "-100%",
    opacity: 0,
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
      opacity: 0,
      duration: 0.8,
      ease: "circ.out",
      scrollTrigger: {
        trigger: card,
        start: "top 100%",
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
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1760677086/download_djadvu.png",
    link: "localhost:3000",
  },
  {
    projectName: "Owosh",
    projectDetails: {
      prompt: "Visit",
      tools: ["Nuxt js", "TypeScript", "Tailwindcss"],
    },
    preview:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1760678272/download_vlyglu.png",
    link: "https://owosh-frontend.vercel.app/",
  },
  {
    projectName: "WalletBits",
    projectDetails: {
      prompt: "Visit",
      tools: ["React", "Tailwindcss", "JavaScript"],
    },
    preview:
      "https://res.cloudinary.com/dw3bvhihp/image/upload/v1760678533/download_pis8tv.png",
    link: "https://walletbits-app.vercel.app/",
  },
]);
</script>
