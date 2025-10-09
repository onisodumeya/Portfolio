<template>
  <button
    class="text-white w-fit h-fit bg-black/60 backdrop-blur-lg text-lg rounded-full relative group border-2 hover:border-2 hover:border-black/60 transition-colors duration-300 ease-out"
  >
    <div
      class="bg-orange-500 px-6 py-2 rounded-full text-nowrap group-hover:-translate-y-1 group-hover:border-b-[6px] group-hover:border-b-orange-600 transition-all duration-300 ease-in-out"
    >
      {{ text }}
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
});
</script>
