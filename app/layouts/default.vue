<template>
  <Preloader v-if="showPreloader" :showPreloader="showPreloader" />
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

const showPreloader = ref<boolean | null>(null);
const showContent = ref<boolean>(false);

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
    }, 7500);
  }
});

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
