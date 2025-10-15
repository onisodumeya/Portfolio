<template>
  <div
    @mouseenter="showDetails"
    @mouseleave="hideDetails"
    :class="`flex flex-col justify-between h-full tracking-wider bg-gray-700 hover:bg-gray-600 hover:-translate-y-1 w-full bg-cover bg-no-repeat bg-center rounded-xl p-3 lg:p-5 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden group`"
  >
    <p class="text-2xl w-fit text-white font-bold">{{ projectName }}</p>
    <div>
      <div class="flex flex-col gap-5">
        <p class="text-white text-sm">
          {{ description }}
        </p>
        <ul class="flex flex-wrap gap-3">
          <li
            v-for="tool in tools"
            class="text-sm font-bold px-5 py-1 bg-white rounded-full"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projectName: {
    type: String,
    default: "Project",
  },
  description: {
    type: String,
  },
  tools: {
    type: [],
  },
});
</script>
