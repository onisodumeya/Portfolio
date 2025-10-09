<template>
  <div
    v-if="showPreloader"
    ref="container"
    class="fixed inset-0 flex items-center justify-center bg-gray-100 border-black border-[30px] z-50"
  >
    <!-- Progress Bar -->
    <div
      ref="mainBar"
      class="w-4/5 h-1.5 bg-gray-700 overflow-hidden z-20 relative"
    >
      <div ref="bar" class="h-1.5 bg-orange-500 w-0"></div>
    </div>
    <div
      ref="preloader"
      class="preloader rounded-md flex flex-col items-center justify-center overflow-hidden"
    >
      <!-- Loading Text -->
      <div ref="name" class="overflow-hidden py-2 h-auto absolute z-30">
        <h1
          class="loading-text text-2xl md:text-4xl whitespace-nowrap font-bold"
        >
          Hello There 👋
        </h1>
      </div>

      <!-- CRT Overlay -->
      <div class="crt-bg absolute inset-0 pointer-events-none z-10"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import "../../assets/css/fonts.css";

defineProps({
  showPreloader: {
    type: Boolean,
    default: false,
  },
});

const container = ref(null);
const mainBar = ref(null);
const bar = ref(null);
const name = ref(null);

const preloader = ref(null);

onMounted(() => {
  // Flicker effect
  gsap.to(".loading-text", {
    opacity: 0.9,
    repeat: -1,
    yoyo: true,
    duration: 0.01,
    ease: "steps(2)",
  });

  // Fake scanline sweep
  gsap.to(".crt-bg", {
    backgroundPosition: "0 100%",
    duration: 2,
    repeat: -1,
    ease: "none",
  });
});

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    bar.value,
    { width: "0%" },
    { width: "100%", duration: 3, ease: "linear" }
  );

  tl.to(
    mainBar.value,
    {
      width: "0%",
      duration: 0.5,
      ease: "linear",
    },
    "+=0.2s"
  );

  tl.fromTo(
    name.value,
    { height: 0 },
    {
      borderRight: "2px solid #121212",
      height: "auto",
      duration: 0.2,
      ease: "linear",
    },
    "+=0.3"
  );

  tl.fromTo(
    name.value,
    { width: 0 },
    {
      paddingRight: "5px",
      width: "auto",
      duration: 0.5,
      ease: "linear",
    },
    "+=0.5"
  );

  tl.to(
    container.value,
    { opacity: 0, duration: 0.5, ease: "linear" },
    "+=1.5"
  );
});
</script>

<style scoped>
.preloader {
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}

.loading-text {
  font-family: "RetroByte", sans-serif;
}

.crt-bg {
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0px,
    rgba(0, 0, 0, 0.15) 2px,
    transparent 2px,
    transparent 4px
  );
  background-size: 100% 4px;
  opacity: 0.3;
}
</style>
