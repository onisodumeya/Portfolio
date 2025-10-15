<template>
  <section
    ref="section"
    class="relative flex flex-col gap-3 justify-between pb-10 px-5 md:px-10"
  >
    <h2
      ref="title"
      class="text-5xl md:text-8xl lg:text-9xl stroke-black text-transparent justify-self-start"
      style="-webkit-text-stroke: 1px #1b1b1b"
    >
      Hey There!
    </h2>
    <div class="flex flex-col gap-5 items-center tracking-wider">
      <p
        ref="whoIAm"
        class="w-full border-b-2 border-b-[#777777] border-dashed leading-loose pb-5"
      >
        I’m Onisodumeya Mazi, a Nigerian frontend developer based in Port
        Harcourt where I build web experiences that feel alive with smooth
        animations, thoughtful layouts, and just enough magic to make users
        smile.
      </p>
      <div class="flex items-start gap-5 w-full justify-between">
        <h3 ref="whatIDo" class="text-base text-nowrap font-bold">
          What I do?
        </h3>
        <div class="flex flex-col gap-4 w-full md:w-4/5 text-sm md:text-base">
          <p
            ref="web"
            class="w-full leading-loose border-b-2 border-b-[#777777] border-dashed pb-5"
          >
            <span class="text-orange-500 font-bold"
              >Frontend Web Development</span
            >
            - I bring designs to life with clean, efficient, and responsive
            code, blending performance with personality. From smooth transitions
            to seamless interactivity, I build interfaces that don’t just work
            but feel right.
          </p>
          <p ref="ui" class="w-full leading-loose">
            <span class="text-orange-500 font-bold">UI Design</span> - I design
            interfaces that speak clearly and look great, balancing minimal
            aesthetics with meaningful user flow. Every pixel, color, and motion
            has a purpose: to make users enjoy the experience as much as they
            understand it.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger, SplitText);

const section = ref(null);
const title = ref(null);
const whoIAm = ref(null);
const whatIDo = ref(null);
const web = ref(null);
const ui = ref(null);

onMounted(() => {
  const split = new SplitText(title.value, { type: "words,chars" });
  const chars = split.chars;

  gsap.from(chars, {
    y: 50,
    opacity: 0,
    ease: "circ.out",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: title.value,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
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
      ease: "",
      duration: 1,
      scrollTrigger: {
        trigger: title.value,
        start: "top 80%",
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
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: whoIAm.value,
        start: "top 80%",
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
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: whatIDo.value,
        start: "top 80%",
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
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: web.value,
        start: "top 80%",
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
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: ui.value,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
</script>
