<template>
  <img
    :src="light"
    alt="Light effect hero background"
    class="absolute top-0 left-0"
    fetchpriority="high"
  />
  <section class="h-screen flex items-center px-5 relative justify-center">
    <div
      class="md:w-4/5 py-14 flex flex-col gap-10 items-center bg-cover bg-no-repeat bg-center"
    >
      <div class="place-items-center overflow-hidden">
        <p
          ref="third"
          class="tracking-[0.5em] text-gray-500 overflow-hidden text-center text-xs md:text-base transition-all duration-500 ease-out"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          Creative Problem Solver
        </p>
      </div>
      <div class="flex flex-col gap-1 text-gray-700">
        <div class="place-items-center overflow-hidden">
          <h1
            ref="first"
            class=":w-full text-center text-4xl md:text-5xl lg:text-7xl tracking-widest pb-2 overflow-hidden transition-all duration-500 ease-out"
            :class="{
              'translate-y-[110%]': !transitionStore.mounted,
              '': transitionStore.mounted,
            }"
          >
            <span
              style="-webkit-text-stroke: 1px #1b1b1b"
              class="text-transparent"
            >
              Hi, I'm
            </span>
            Onisodumeya
          </h1>
        </div>
        <div class="place-items-center overflow-hidden">
          <h1
            ref="second"
            class="w-full text-center tracking-widest text-sm md:text-lg overflow-hidden transition-all duration-500 ease-out"
            :class="{
              'translate-y-[110%]': !transitionStore.mounted,
              '': transitionStore.mounted,
            }"
          >
            I create online experiences that earn attention, trust and
            customers.
          </h1>
        </div>
      </div>
      <div class="flex flex-col md:flex-row overflow-hidden p-4">
        <div
          ref="btn"
          class="flex transition-all duration-500 ease-out z-20"
          :class="{
            'translate-y-[140%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          <PriBtn @btnClicked="scrollTo" aria="Contact me">
            <p>Let's Talk</p>
          </PriBtn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import light from "../../assets/images/light-ray.avif";

gsap.registerPlugin(ScrollTrigger, SplitText);

const transitionStore = usePageTransitionStore();

const first = ref(null);
const second = ref(null);
const third = ref(null);
const btn = ref(null);

onMounted(() => {
  const elements = [first.value, second.value, third.value, btn.value];

  gsap.fromTo(
    elements,
    {
      y: 100,
      opacity: 0.01,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.4,
      duration: 0.8,
      force3D: true,
    }
  );
});

const emit = defineEmits(["scroll"]);

function scrollTo() {
  emit("scroll");
}

const props = defineProps({
  mounted: Boolean,
});
</script>
