import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageTransitionStore = defineStore("pageTransition", () => {
  const mounted = ref(false);

  function triggerTransition() {
    mounted.value = false;
    setTimeout(() => {
      mounted.value = true;
    }, 500);
  }

  return { mounted, triggerTransition };
});
