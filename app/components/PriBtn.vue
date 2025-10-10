<template>
  <button
    class="text-white w-fit h-fit bg-black/60 backdrop-blur-lg text-lg rounded-full relative group border-2 border-black/60 hover:border-2 hover:border-black/60 transition-colors duration-300 ease-out"
  >
    <div
      ref="button"
      @click.stop="buttonAction"
      @mousemove="moveGlow"
      @mouseleave="hideGlow"
      :class="`relative bg-orange-500 border-b-2 border-b-orange-700 border-t-2 border-t-white/50 px-6 py-2 rounded-full text-nowrap ${border} transition-all duration-300 ease-in-out overflow-hidden`"
    >
      <div
        ref="glow"
        class="absolute w-10 h-10 bg-orange-100/50 blur-md top-0 rounded-full z-10"
      ></div>
      <p class="relative z20">{{ text }}</p>
    </div>
  </button>
</template>
<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

defineProps({
  text: {
    type: String,
  },
});

const border = ref("group-hover:-translate-y-1");

function buttonAction() {
  border.value = "group-hover:-translate-y-0";

  setTimeout(() => {
    border.value = "group-hover:-translate-y-1";
  }, 150);
}

const button = ref(null);
const glow = ref(null);

function moveGlow(e) {
  const rect = button.value.getBoundingClientRect();
  const x = e.clientX - rect.left - 30;
  const y = e.clientY - rect.top - 5;

  gsap.to(glow.value, { x, y, duration: 0.3, ease: "power2.out" });
  glow.value.style.opacity = 1;
}

onMounted(() => {
  glow.value.style.opacity = 0;
});

function hideGlow() {
  glow.value.style.opacity = 0;
}
</script>
