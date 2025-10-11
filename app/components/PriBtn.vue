<template>
  <button
    class="text-white w-fit h-fit bg-black/60 backdrop-blur-lg text-lg rounded-full relative group border-2 border-black/60 hover:border-2 hover:border-black/60 transition-colors duration-300 ease-out"
  >
    <div
      @click.stop="buttonAction"
      :class="`relative bg-orange-500 border-b-4 border-b-orange-700 border-t-2 border-t-white/50 px-6 py-2 rounded-full text-nowrap ${border} transition-all duration-300 ease-in-out overflow-hidden group`"
    >
      <div
        class="absolute w-10 h-full bg-orange-100/50 blur-md top-0 rounded-full z-10 transform -translate-x-[200%] group-hover:translate-x-[300%] transition-all duration-300 ease-linear"
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
</script>
