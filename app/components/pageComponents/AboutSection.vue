<template>
  <section ref="section" class="px-5 md:px-10 place-items-center">
    <div class="relative h-auto flex flex-col gap-3 justify-between z-20">
      <h2
        ref="title"
        class="text-5xl md:text-6xl stroke-gray-300 tracking-wider text-orange-400 font-bold justify-self-start"
        style="-webkit-text-stroke: 0.8px #121212"
      >
        Hello!
      </h2>
      <div class="flex flex-col gap-5 items-center tracking-wider w-full">
        <p
          ref="whoIAm"
          class="w-full border-b-2 border-b-[#777777] border-dashed leading-loose pb-5"
        >
          I’m Onisodumeya Mazi, a frontend developer. I help brands and creators
          build websites that look great, feel smooth, and turn user attention
          into conversions.
        </p>
        <div
          class="flex flex-col md:flex-row items-start gap-5 w-full justify-between"
        >
          <h3 ref="whatIDo" class="text-base text-nowrap font-bold">
            What I do?
          </h3>
          <div class="flex flex-col gap-4 w-full md:w-4/5 text-sm md:text-base">
            <p
              ref="web"
              class="w-full leading-loose border-b-2 border-b-[#777777] border-dashed pb-5"
            >
              <span class="text-orange-400 font-bold"
                >Frontend Web Development</span
              >
              - Keeping SEO practices and mobile responsiveness at the
              forefront, I build websites that boost user engagement and improve
              conversion rates, leading to an overall business growth.
            </p>
            <p ref="ui" class="w-full leading-loose">
              <span class="text-orange-400 font-bold">UI Design</span> - I
              believe good design should do more than just look good, it should
              also guide users to take action and drive real results for your
              business.
            </p>
          </div>
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
  gsap.from(title.value, {
    x: "-100%",
    opacity: 0.01,
    ease: "circ.out",
    duration: 1,
    scrollTrigger: {
      trigger: title.value,
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.fromTo(
    whoIAm.value,
    {
      y: 100,
      opacity: 0.01,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: whoIAm.value,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    },
  );
  gsap.fromTo(
    whatIDo.value,
    {
      y: 100,
      opacity: 0.01,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: whatIDo.value,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    },
  );
  gsap.fromTo(
    web.value,
    {
      y: 100,
      opacity: 0.01,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: web.value,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    },
  );
  gsap.fromTo(
    ui.value,
    {
      y: 100,
      opacity: 0.01,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.3,
      ease: "circ.out",
      duration: 1,
      scrollTrigger: {
        trigger: ui.value,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    },
  );
});
</script>
