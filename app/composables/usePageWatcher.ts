// composables/usePageWatcher.ts
import { watch } from "vue";
import { useRoute } from "vue-router";
import { usePageTransitionStore } from "~/stores/pageTransition";

export function usePageWatcher() {
  const route = useRoute();
  const store = usePageTransitionStore();

  watch(
    () => route.fullPath,
    () => {
      store.triggerTransition();
    }
  );
}
