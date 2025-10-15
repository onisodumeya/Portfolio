<template>
  <div
    class="absolute z-0 h-full w-full top-0 left-0"
    :style="`background: url(${light})`"
    style="background-size: 80%; background-repeat: no-repeat"
  ></div>
  <section class="h-auto flex flex-col items-center pt-20 md:pt-20 relative">
    <div
      class="rounded-3xl md:w-4/5 py-14 flex flex-col gap-10 items-center bg-cover bg-no-repeat bg-center"
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
          Creative Problem Solver / Designer
        </p>
      </div>
      <div class="flex flex-col gap-1 text-gray-700">
        <div class="place-items-center overflow-hidden">
          <h1
            ref="first"
            class=":w-full text-center text-4xl md:text-5xl lg:text-7xl pb-2 font-bold overflow-hidden transition-all duration-500 ease-out"
            :class="{
              'translate-y-[110%]': !transitionStore.mounted,
              '': transitionStore.mounted,
            }"
          >
            Hi, I'm
            <span
              style="
                background-color: #ea580c;
                background-clip: text;
                -webkit-background-clip: text;
                overflow: hidden;
                color: transparent;
                text-shadow: 3px 5px 1px rgba(209, 213, 219, 0.5);
              "
              >Onisodumeya</span
            >
          </h1>
        </div>
        <div class="place-items-center overflow-hidden">
          <h1
            ref="second"
            class="w-full text-center text-4xl md:text-5xl lg:text-7xl font-bold overflow-hidden transition-all duration-500 ease-out"
            :class="{
              'translate-y-[110%]': !transitionStore.mounted,
              '': transitionStore.mounted,
            }"
          >
            and I build
            <span
              style="
                background-color: #ea580c;
                background-clip: text;
                -webkit-background-clip: text;
                overflow: hidden;
                color: transparent;
                text-shadow: 3px 5px 1px rgba(209, 213, 219, 0.5);
              "
              >cool</span
            >
            websites
          </h1>
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-2 pr-2 overflow-hidden">
        <div
          ref="btn"
          class="transition-all duration-500 ease-out w-auto h-auto"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          <PriBtn text="Let's Talk" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
// import noise from "../assets/images/noise.png";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import light from "../../assets/images/light-ray.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

const transitionStore = usePageTransitionStore();
const route = useRoute();
const changedRoute = ref(false);

const first = ref(null);
const second = ref(null);
const third = ref(null);
const btn = ref(null);

onMounted(() => {
  // transitionStore.triggerTransition();
  gsap.fromTo(
    first.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.4,
    }
  );
  gsap.fromTo(
    second.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.4,
    }
  );
  gsap.fromTo(
    third.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.4,
    }
  );
  gsap.fromTo(
    btn.value,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.4,
    }
  );
});

// watch(
//   () => route.fullPath,
//   () => {
//     changedRoute.value = true;
//     transitionStore.triggerTransition();
//   }
// );

const props = defineProps({
  mounted: Boolean,
});
</script>
