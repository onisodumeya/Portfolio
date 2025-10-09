<script setup lang="ts">
import { onMounted } from "vue";
defineProps<{ to: string; label: string }>();
</script>

<template>
  <NuxtLink
    :class="[
      'group relative overflow-hidden h-fit',
      $route.path === to ? 'text-orange-300' : 'text-gray-300',
    ]"
    :to="to"
    class="group relative overflow-hidden h-fit"
  >
    <span
      class="text-3xl md:text-4xl lg:text-6xl pb-1 md:pb-2 lg:pb-3 w-fit font-light block transform transition-transform ease-in-out duration-700 group-hover:-translate-y-full"
    >
      {{ label }}
    </span>
    <span
      class="text-3xl md:text-4xl lg:text-6xl pb-1 md:pb-2 lg:pb-3 w-fit font-light block absolute top-full left-0 transform transition-transform ease-in-out duration-500 hover:animate-pulse group-hover:-translate-y-full text-orange-300"
    >
      {{ label }}
    </span>
  </NuxtLink>
</template>
