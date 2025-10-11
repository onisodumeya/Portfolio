<template>
  <Preloader
    v-if="showPreloader"
    :showPreloader="showPreloader"
    :short="isRouteChange"
  />
  <div v-else-if="showContent">
    <Navbar
      @toggleMenu="toggleMenu"
      @closeMenu="isMenuOpen = false"
      :isMenuOpen="isMenuOpen"
      class="z-50"
    />
    <NavMenu :isMenuOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />
    <main class="flex-grow z-0">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

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
    }, 3000);
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
    }, 7500); // full intro duration
  }
});

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
