<template>
  <div
    v-if="showPreloader"
    ref="container"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
  >
    <div ref="mainBar" class="w-4/5 h-1.5 bg-gray-700 overflow-hidden">
      <div ref="bar" class="h-1.5 bg-white w-0"></div>
    </div>
    <div ref="name" class="overflow-hidden pb-1 lg:pb-2 h-auto absolute">
      <h1 class="text-2xl md:text-4xl lg:text-6xl text-nowrap font-bold">
        Hello There 😁👋
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

defineProps({
  showPreloader: Boolean,
});

const container = ref(null);
const mainBar = ref(null);
const bar = ref(null);
const name = ref(null);

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
      borderRight: "2px solid #ffffff",
      height: "auto",
      duration: 0.2,
      ease: "linear",
    },
    "+=1"
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

  tl.to(container.value, { opacity: 0, duration: 0.5, ease: "linear" }, "+=1");
});
</script>
