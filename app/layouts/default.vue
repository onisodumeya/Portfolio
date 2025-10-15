<template>
  <Preloader
    v-if="showPreloader"
    :showPreloader="showPreloader"
    :short="isRouteChange"
  />

  <div v-else-if="showContent">
    <div
      ref="cursor"
      class="fixed w-6 h-6 rounded-full bg-white/40 bg-opacity-20 border border-white backdrop-blur-sm pointer-events-none z-[9999]"
    ></div>
    <Navbar
      @toggleMenu="toggleMenu"
      @closeMenu="isMenuOpen = false"
      :isMenuOpen="isMenuOpen"
      class="z-50"
    />
    <NavMenu
      :isMenuOpen="isMenuOpen"
      @closeMenu="isMenuOpen = false"
      class="z-40"
    />
    <main class="flex-grow z-0">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";

const showPreloader = ref<boolean>(false);
const showContent = ref<boolean>(false);
const isRouteChange = ref<boolean>(false);

const route = useRoute();

// 👇 Watch for route change
watch(
  () => route.fullPath,
  () => {
    isRouteChange.value = true;
    showPreloader.value = true;
    showContent.value = false;

    // short preloader duration
    setTimeout(() => {
      showPreloader.value = false;
      showContent.value = true;
      isRouteChange.value = false;
    }, 5000);
  }
);

onMounted(() => {
  const preloader = sessionStorage.getItem("showPreloader");
  if (preloader) {
    showContent.value = true;
    showPreloader.value = false;
  } else {
    showPreloader.value = true;
    setTimeout(() => {
      showPreloader.value = false;
      showContent.value = true;
      sessionStorage.setItem("showPreloader", "done");
    }, 2500);
  }
});

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const cursor = ref(null);

onMounted(() => {
  const hoverTargets = document.querySelectorAll("a, button");

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor.value, {
      x: e.clientX - 12, // subtract half of width to center
      y: e.clientY - 12,
      duration: 0.5,
      ease: "power1.out",
    });
  });
});
</script>
