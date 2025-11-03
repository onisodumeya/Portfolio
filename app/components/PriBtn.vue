<template>
  <NuxtLink
    :to="link"
    class="w-fit h-fit text-lg font-semibold relative group transition-colors duration-300 ease-out"
    :aria-label="aria"
  >
    <div
      @click.stop="buttonAction"
      :class="`relative text-sm md:text-base flex gap-3 items-center bg-orange-400 border-b-[3px] border-b-orange-700 border-l-[3px] border-l-orange-700 border-t-[3px] border-t-white/65 border-r-[3px] border-r-white/65 px-6 py-2 text-nowrap ${border} transition-all duration-300 ease-in-out overflow-hidden text-center group group-hover:shadow-lg group-hover:shadow-orange-700/50`"
    >
      <div
        class="absolute w-10 h-full bg-orange-100/50 blur-md top-0 z-10 transform -translate-x-[200%] group-hover:translate-x-[300%] transition-all duration-300 ease-linear"
      ></div>
      <slot />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

defineProps({
  text: String,
  link: String,
  aria: String,
});

const border = ref("group-hover:-translate-y-1");

const emit = defineEmits(["btnClicked"]);

function buttonAction() {
  border.value = "group-hover:-translate-y-0";
  emit("btnClicked");

  setTimeout(() => {
    border.value = "group-hover:-translate-y-1";
  }, 150);
}
</script>
