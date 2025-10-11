<template>
  <section class="flex flex-col md:flex-row justify-between px-5">
    <div ref="title" class="w-2/5">
      <h2 class="text-3xl text-nowrap">Nice to meet you!</h2>
    </div>
    <div class="flex flex-col gap-3 items-end text-[#555555]">
      <p
        ref="whoIAm"
        class="w-3/5 border border-b-[#777777] border-dashed leading-loose pb-2"
      >
        Hey there! I’m Onisodumeya Mazi, a Nigerian frontend developer based in
        Port Harcourt where I build web experiences that feel alive — smooth
        animations, thoughtful layouts, and just enough magic to make users
        smile.
      </p>
      <div
        class="flex gap-5 w-3/5 justify-between border border-b-[#777777] border-dashed pb-2"
      >
        <h3 ref="whatIDo" class="text-lg text-[#1b1b1b]">What I do?</h3>
        <div class="flex flex-col gap-4 w-4/5">
          <p ref="web" class="w-full leading-loose">
            <i class="text-[#1b1b1b]">Frontend Web Development</i> - I bring
            designs to life with clean, efficient, and responsive code, blending
            performance with personality. From smooth transitions to seamless
            interactivity, I build interfaces that don’t just work but feel
            right.
          </p>
          <p ref="ui" class="w-full leading-loose">
            <i class="text-[#1b1b1b]">UI Design</i> - I design interfaces that
            speak clearly and look great — balancing minimal aesthetics with
            meaningful user flow. Every pixel, color, and motion has a purpose:
            to make users enjoy the experience as much as they understand it.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const title = ref(null);
const whoIAm = ref(null);
const whatIDo = ref(null);
const web = ref(null);
const ui = ref(null);

onMounted(() => {
  gsap.fromTo(
    title.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: title.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    whoIAm.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: whoIAm.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    whatIDo.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: whatIDo.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    web.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: web.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    ui.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: ui.value,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
</script>
