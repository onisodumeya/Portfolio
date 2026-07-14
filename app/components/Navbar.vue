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
        <h1 class="text-orange-400">Onisodumeya</h1>
      </NuxtLink>
    </div>

    <div class="overflow-hidden">
      <div
        class="flex items-center gap-5 text-xl p-2 transition-transform duration-500 ease-out"
        :class="{
          'translate-y-full opacity-0': !transitionStore.mounted,
          'translate-y-0 opacity-100': transitionStore.mounted,
        }"
      >
        <a
          target="_blank"
          aria-label="Coonect with me on Linkedin profile"
          href="https://LinkedIn.com/in/onisodumeyamazi"
          ><Icon
            icon="simple-icons:linkedin"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
        <a
          target="_blank"
          aria-label="Visit my GitHub profile"
          href="https://github.com/onisodumeya"
          ><Icon
            icon="simple-icons:github"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
        <a
          target="_blank"
          aria-label="Message me on Whatsapp"
          href="https://wa.me/2348037819521"
          ><Icon
            icon="simple-icons:whatsapp"
            class="text-black hover:-translate-y-1 transition-all duration-300"
        /></a>
        <a
          :href="cv"
          download="Onisodumeya_Mazi_CV.pdf"
          class="hover:-translate-y-1 transition-all duration-300 text-sm"
          >Download CV</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePageTransitionStore } from "~/stores/pageTransition";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import cv from "../../public/Onisodumeya_Mazi_Frontend_Developer.pdf";

const transitionStore = usePageTransitionStore();
const route = useRoute();

onMounted(() => {
  transitionStore.triggerTransition();
});

watch(
  () => route.fullPath,
  () => {
    transitionStore.triggerTransition();
  },
);

const props = defineProps({ isMenuOpen: Boolean });
const emit = defineEmits(["toggleMenu", "closeMenu"]);
</script>
