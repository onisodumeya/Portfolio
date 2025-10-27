<template>
  <section
    class="h-screen flex flex-col md:flex-row place-content-center p-5 gap-20 z-20"
  >
    <div class="md:p-5 md:w-2/5 md:h-full md:place-content-center">
      <div ref="CTA" class="flex flex-col gap-3">
        <h2
          class="font-thin text-3xl md:text-4xl leading-normal md:leading-normal"
        >
          Do you have an
          <span class="text-orange-500 font-medium">Idea</span> you want to
          bring
          <span class="text-orange-500 font-medium">to life?</span>
        </h2>
        <div class="flex">
          <PriBtn text="Contact Me" link="/contact" />
        </div>
      </div>
    </div>
    <div
      class="relative md:p-5 pb-10 md:w-3/5 md:h-full md:place-content-center md:place-items-end flex flex-col gap-5"
    >
      <div ref="socials" class="flex flex-wrap gap-5">
        <a
          v-for="social in socialLinks"
          :href="social.link"
          target="_blank"
          class="text-sm md:text-base flex gap-3 h-fit w-fit px-5 py-2 border border-[#121212] hover:bg-[#121212] hover:shadow-md hover:shadow-black/50 hover:-translate-y-1 hover:text-white transition-all duration-300"
        >
          {{ social.platform }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = ref(null);
const socials = ref(null);

onMounted(() => {
  gsap.from(socials.value, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: socials.value,
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(CTA.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: socials.value,
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });
});

const socialLinks = [
  {
    platform: "LinkedIn",
    link: "https://LinkedIn.com/in/onisodumeyamazi",
  },
  {
    platform: "X",
    link: "https://x.com/theonimazi",
  },
  {
    platform: "WhatsApp",
    link: "wa.me/2348037819521",
  },
  {
    platform: "GitHub",
    link: "https://github.com/onisodumeya",
  },
];
</script>
