<template>
  <Preloader v-if="showPreloader" :showPreloader="showPreloader" />
  <div v-else-if="showContent" class="flex-grow">
    <Navbar
      @toggleMenu="toggleMenu"
      :isMenuOpen="isMenuOpen"
      :mounted="mounted"
    />
    <NavMenu :isMenuOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const showPreloader = ref<boolean | null>(null);
const showContent = ref<boolean>(false);
const mounted = ref<boolean>(false);

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    mounted.value = false;
    setTimeout(() => {
      mounted.value = true;
    }, 500);
  }
);

onMounted(() => {
  const preloader = sessionStorage.getItem("showPreloader");
  if (preloader) {
    mounted.value = false;
    showContent.value = true;
    showPreloader.value = false;

    setTimeout(() => {
      mounted.value = true;
    }, 500);
  } else {
    showPreloader.value = true;
    setTimeout(() => {
      mounted.value = false;
      showPreloader.value = false;
      showContent.value = true;
      sessionStorage.setItem("showPreloader", "done");

      setTimeout(() => {
        mounted.value = true;
      }, 500);
    }, 7000);
  }
});

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
