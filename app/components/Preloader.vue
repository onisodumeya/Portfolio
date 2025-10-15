<template>
  <div
    v-if="showPreloader"
    ref="container"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
  >
    <!-- Percentage Counter -->
    <h2
      ref="counter"
      class="text-4xl md:text-6xl font-bold text-orange-500 font-mono"
    >
      0%
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import "../../assets/css/fonts.css";

const props = defineProps({
  showPreloader: {
    type: Boolean,
    default: false,
  },
  short: {
    type: Boolean,
    default: false,
  },
});

const container = ref(null);
const counter = ref(null);

onMounted(() => {
  const counterObj = { value: 0 };

  const tl = gsap.timeline();

  tl.to(counterObj, {
    value: 100,
    duration: 2,
    ease: "circ.out",
    onUpdate: () => {
      counter.value.textContent = `${Math.round(counterObj.value)}%`;
    },
  }).to(container.value, {
    y: "-120%",
    duration: 0.5,
    ease: "circ.inOut",
    onComplete: () => (container.value.style.display = "none"),
  });
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
