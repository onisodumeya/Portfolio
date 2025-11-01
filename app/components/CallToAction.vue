<template>
  <section
    ref="ctaSection"
    class="h-auto min-h-screen flex flex-col md:flex-row place-content-center p-5 py-10 md:py-20 gap-20 z-20"
  >
    <div class="md:p-5 md:w-2/5 md:h-full md:place-content-center">
      <div ref="CTA" class="flex flex-col gap-5">
        <h2 class="text-2xl md:text-3xl leading-normal md:leading-normal">
          Looking for someone to bring your idea to life?
        </h2>
        <div class="flex">
          <div class="flex flex-col w-full items-center gap-10">
            <div class="flex gap-5 w-full">
              <label for="" class="w-full rounded-none">
                <input
                  type="text"
                  class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                  placeholder="Your name"
                />
              </label>
              <label for="" class="w-full rounded-none">
                <input
                  type="email"
                  class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                  placeholder="Your email"
                />
              </label>
            </div>
            <label for="" class="w-full rounded-none">
              <input
                type="text"
                class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                placeholder="Your brilliant idea"
              />
            </label>
            <label for="" class="w-full rounded-none">
              <textarea
                type="text"
                class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                placeholder="Description"
              />
            </label>
            <label for="" class="w-full rounded-none">
              <textarea
                type="text"
                class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                placeholder="Budget (optional)"
              />
            </label>
            <PriBtn class="self-start" text="Submit" />
          </div>
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
          class="text-sm md:text-base flex items-center gap-3 h-fit w-fit px-5 py-2 border border-[#121212] hover:bg-[#121212] hover:shadow-md hover:shadow-black/50 hover:-translate-y-1 hover:text-white transition-all duration-300"
        >
          <Icon :icon="social.icon" class="text-xl" />
          <p>{{ social.platform }}</p>
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

const ctaSection = ref(null);
const CTA = ref(null);
const socials = ref(null);
import { Icon } from "@iconify/vue";

defineExpose({ ctaSection });

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
    icon: "mdi:linkedin",
  },
  {
    platform: "GitHub",
    link: "https://github.com/onisodumeya",
    icon: "mdi:github",
  },
  {
    platform: "WhatsApp",
    link: "wa.me/2348037819521",
    icon: "mdi:whatsapp",
  },
];
</script>
