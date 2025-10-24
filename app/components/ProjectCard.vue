<template>
  <div
    @mouseenter="showDetails"
    @mouseleave="hideDetails"
    :class="`group project-card flex flex-col gap-5 justify-between h-full tracking-wider bg-gray-700 hover:bg-gray-800 hover:-translate-y-1 w-full bg-cover bg-no-repeat bg-center rounded-xl p-3 lg:p-5 transition-all duration-300 ease-in-out relative overflow-hidden group`"
  >
    <p class="text-3xl w-fit text-white font-bold">{{ projectName }}</p>
    <div>
      <div class="flex flex-col gap-5">
        <div
          class="rounded-lg lg:rounded-xl overflow-hidden transition-all duration-300"
        >
          <div
            class="w-full bg-white h-32 md:h-40 place-content-center place-items-center"
            :style="`background: url(${previewImg});
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;`"
          >
            <div
              class="bg-gray-700/80 py-1 px-4 rounded-full place-items-center place-content-center transition-all duration-300 overflow-hidden translate-y-[350%] group-hover:translate-y-0"
            >
              <p class="text-white text-center text-nowrap text-xs md:text-sm">
                {{ promptText }}
              </p>
            </div>
          </div>
        </div>

        <ul class="flex flex-wrap gap-3">
          <li
            v-for="tool in tools"
            class="text-xs font-bold px-5 py-1 bg-white rounded-full"
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
  promptText: {
    type: String,
    default: "visit",
  },
  previewImg: {
    type: String,
  },
});
</script>
