<template>
  <nav
    class="fixed top-0 flex flex-row w-full items-center justify-between py-2.5 md:py-5 px-5 md:px-10"
  >
    <div class="pb-1 overflow-hidden">
      <NuxtLink
        @click="emit('closeMenu')"
        to="/"
        class="text-2xl md:text-4xl font-bold text-orange-500 transition-transform duration-500 ease-out block"
        :class="{
          'translate-y-[110%] opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        👨🏽‍💻
      </NuxtLink>
    </div>

    <div class="overflow-hidden">
      <button
        @click="emit('toggleMenu')"
        class="relative group w-12 md:w-16 h-12 md:h-16 z-20 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"
        :class="{
          'translate-y-full opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        <div
          class="absolute bg-black/90 rounded-full w-0 h-0 self-center z-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out"
        ></div>

        <Menu
          :class="{
            'block transform transition-transform ease-in-out duration-500 -translate-x-[150%]':
              isMenuOpen,
            'block transform transition-transform ease-in-out duration-300':
              !isMenuOpen,
          }"
        />
        <X
          :class="{
            'block transform transition-transform ease-in-out duration-300 -translate-x-[150%]':
              isMenuOpen,
            'block transform transition-transform ease-in-out duration-500':
              !isMenuOpen,
          }"
        />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import Menu from "./iconComponents/Menu.vue";
import X from "./iconComponents/X.vue";

const transitionStore = usePageTransitionStore();
const route = useRoute();

onMounted(() => {
  transitionStore.triggerTransition();
});

watch(
  () => route.fullPath,
  () => {
    console.log("Route changed! Triggering transition...");
    transitionStore.triggerTransition(); // trigger your animation logic
  }
);

const props = defineProps({ isMenuOpen: Boolean });
const emit = defineEmits(["toggleMenu", "closeMenu"]);
</script>
