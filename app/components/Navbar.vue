<template>
  <nav
    class="flex flex-row items-center justify-between py-2.5 md:py-5 px-5 md:px-10"
  >
    <div class="pb-1 overflow-hidden">
      <h1
        class="text-2xl md:text-4xl font-bold transition-all duration-500 ease-out text-orange-500"
        :class="{ 'translate-y-full': !mounted, '': mounted }"
      >
        Onisodumeya
      </h1>
    </div>
    <div class="overflow-hidden">
      <button
        @click="emit('toggleMenu')"
        class="relative group w-12 md:w-16 h-12 md:h-16 z-20 flex overflow-hidden items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out"
        :class="{ 'translate-y-full': !mounted, '': mounted }"
      >
        <!-- Menu Icon -->
        <Menu
          :class="{
            'block transform transition-transform ease-in-out duration-500 -translate-x-[150%]':
              isMenuOpen,
            'block transform transition-transform ease-in-out duration-300':
              !isMenuOpen,
          }"
        />

        <!-- X Icon -->
        <X
          :class="{
            'block transform transition-transform ease-in-out duration-300 -translate-x-[150%]':
              isMenuOpen,
            'block transform transition-transform ease-in-out duration-500':
              !isMenuOpen,
          }"
        />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Menu from "./iconComponents/Menu.vue";
import X from "./iconComponents/X.vue";

const props = defineProps({
  isMenuOpen: Boolean,
  mounted: Boolean,
});

const emit = defineEmits(["toggleMenu"]);
</script>
