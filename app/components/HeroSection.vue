<template>
  <section
    class="min-h-screen flex flex-col items-center pt-20 md:pt-28 px-5 relative"
  >
    <div
      class="rounded-3xl w-4/5 py-14 flex flex-col gap-10 items-center bg-cover bg-no-repeat bg-center"
    >
      <div class="place-items-center overflow-hidden">
        <p
          class="tracking-[0.5em] text-gray-500 overflow-hidden text-center text-xs md:text-base transition-all duration-500 ease-out"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          Creative Problem Solver / Designer
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <div class="place-items-center overflow-hidden">
          <h1
            class=":w-full text-center text-[#1b1b1b] text-4xl md:text-5xl lg:text-7xl overflow-hidden transition-all duration-500 ease-out"
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
                text-shadow: 3px 5px 1px rgba(229, 231, 235, 0.5);
              "
              >Onisodumeya</span
            >
          </h1>
        </div>
        <div class="place-items-center overflow-hidden">
          <h1
            class="w-full text-center text-[#1b1b1b] text-4xl md:text-5xl lg:text-7xl overflow-hidden transition-all duration-500 ease-out"
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
                text-shadow: 3px 5px 1px rgba(229, 231, 235, 0.5);
              "
              >cool</span
            >
            stuff
          </h1>
        </div>
      </div>
      <div class="flex flex-col md:flex-row pt-2 pr-2 overflow-hidden">
        <div
          class="transition-all duration-500 ease-out w-auto h-auto"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          <PriBtn text="Let's chat" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import noise from "../assets/images/noise.png";

const transitionStore = usePageTransitionStore();
const route = useRoute();

onMounted(() => {
  transitionStore.triggerTransition();
});

watch(
  () => route.fullPath,
  () => {
    console.log("Route changed! Triggering transition...");
    transitionStore.triggerTransition();
  }
);

const props = defineProps({
  mounted: Boolean,
});
</script>
