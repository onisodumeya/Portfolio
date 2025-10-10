<template>
  <button
    class="text-white w-fit h-fit bg-black/60 backdrop-blur-lg text-lg rounded-full relative group border-2 border-black/60 hover:border-2 hover:border-black/60 transition-colors duration-300 ease-out"
  >
    <div
      @click.stop="buttonAction"
      :class="`bg-orange-500 px-6 py-2 rounded-full text-nowrap ${border} transition-all duration-300 ease-in-out`"
    >
      {{ text }}
    </div>
  </button>
</template>
<script setup lang="ts">
import { ref } from "vue";

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
