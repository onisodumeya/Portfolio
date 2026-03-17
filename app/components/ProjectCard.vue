<template>
  <div class="h-auto w-auto">
    <div
      :class="`project-card flex flex-col gap-5 justify-between h-full tracking-wider  hover:-translate-y-2 w-full bg-cover bg-no-repeat bg-center p-3 lg:p-5 transition-all duration-300 ease-in-out relative overflow-hidden group`"
      :aria-label="`View project: ${projectName}`"
    >
      <div class="bg-gray-300 py-1 px-3 border border-black">
        <!-- Name -->
        <p class="text-lg w-fit font-bold">{{ projectName }}</p>
      </div>
      <div>
        <div class="flex flex-col gap-5">
          <!-- Image -->
          <div class="overflow-hidden transition-all duration-300">
            <div
              class="relative w-full bg-white border border-black h-32 md:h-40 place-content-center place-items-center flex overflow-hidden"
            >
              <img
                :src="previewImg"
                :alt="`${projectName} thumbnail`"
                :aria-label="`${projectName} thumbnail`"
                class="absolute inset-0 w-full h-full object-cover"
                decoding="async"
                loading="lazy"
              />
              <div
                class="absolute bg-black/50 backdrop-blur-sm py-1 px-4 w-fit self-center rounded-full place-items-center place-content-center transition-all duration-300 overflow-hidden lg:translate-y-[350%] group-hover:translate-y-0"
              >
                <p
                  class="text-white text-center text-nowrap text-xs md:text-sm"
                >
                  {{ promptText }}
                </p>
              </div>
            </div>
          </div>
          <!-- Stacks -->
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="(tool, index) in tools"
              :class="`text-xs font-medium px-5 py-1 border border-black ${bgColor[index]}`"
            >
              {{ tool }}
            </li>
          </ul>
          <!-- Description -->
          <div class="w-full text-sm">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  promptText: {
    type: String,
    default: "visit",
  },
  previewImg: {
    type: String,
  },
});

const bgColor = ["bg-green-50", "bg-purple-50", "bg-blue-50", "bg-red-50"];
</script>
