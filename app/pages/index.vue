<template>
  <div class="min-h-screen flex flex-col items-center pt-5 relative">
    <div class="flex flex-col gap-10 items-center py-10">
      <div class="place-items-center overflow-hidden">
        <p
          class="tracking-[0.5em] overflow-hidden transition-all duration-500 ease-out"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          Creative Problem Solver / Designer
        </p>
      </div>
      <div class="place-items-center overflow-hidden">
        <h1
          class="md:w-4/5 lg:w-3/5 text-center text-2xl md:text-4xl lg:text-7xl overflow-hidden transition-all duration-500 ease-out"
          :class="{
            'translate-y-[110%]': !transitionStore.mounted,
            '': transitionStore.mounted,
          }"
        >
          Hi, I'm <span class="text-orange-500">Onisodumeya</span> and I build
          cool stuff
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";

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
