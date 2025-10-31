<template>
  <nav
    class="fixed top-0 flex flex-row w-full max-w-[1800px] items-center bg-none justify-between py-2.5 md:py-5 px-5 md:px-10"
    :class="{ 'backdrop-blur-none': isMenuOpen }"
  >
    <div class="pb-1 overflow-hidden">
      <NuxtLink
        @click="emit('closeMenu')"
        to="/"
        class="text-2xl md:text-5xl font-bold text-orange-500 transition-transform duration-500 ease-out block"
        :class="{
          'translate-y-[110%] opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        👨🏽‍💻
      </NuxtLink>
    </div>

    <div class="overflow-hidden">
      <div
        class="flex items-center gap-5 text-2xl p-2 transition-transform duration-500 ease-out"
        :class="{
          'translate-y-full opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        <a target="_blank" href="https://LinkedIn.com/in/onisodumeyamazi"
          ><Icon
            icon="mdi:linkedin"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
        <a target="_blank" href="https://github.com/onisodumeya"
          ><Icon
            icon="mdi:github"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
        <a target="_blank" href="https://wa.me/2348037819521"
          ><Icon
            icon="mdi:whatsapp"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
      </div>
      <!-- <button
        @click="emit('toggleMenu')"
        class="lg:hidden relative group w-12 md:w-16 h-12 md:h-16 z-20 flex flex-col gap-[6px] md:gap-2 items-center justify-center rounded-full transition-all duration-500 ease-in-out backdrop-blur-sm"
        :class="{
          'translate-y-full opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        <div
          class="h-[2.5px] md:h-1 bg-orange-500 w-3/5 z-10 transition-all duration-300"
          :class="{
            'translate-y-[8.5px] md:translate-y-3': isMenuOpen,
            '-rotate-45': isMenuOpen,
          }"
        ></div>
        <div
          class="h-[2.5px] md:h-1 bg-orange-500 w-2/5 z-10 group-hover:translate-x-0 transition-all duration-300"
          :class="{
            'translate-x-0': isMenuOpen,
            'rotate-45 opacity-0': isMenuOpen,
            '-translate-x-2': !isMenuOpen,
          }"
        ></div>
        <div
          class="h-[2.5px] md:h-1 bg-orange-500 w-3/5 z-10 transition-all duration-300"
          :class="{
            '-translate-y-[8.5px] md:-translate-y-3': isMenuOpen,
            'rotate-45': isMenuOpen,
          }"
        ></div>
      </button> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const transitionStore = usePageTransitionStore();
const route = useRoute();

onMounted(() => {
  transitionStore.triggerTransition();
});

watch(
  () => route.fullPath,
  () => {
    transitionStore.triggerTransition();
  }
);

const props = defineProps({ isMenuOpen: Boolean });
const emit = defineEmits(["toggleMenu", "closeMenu"]);
</script>
