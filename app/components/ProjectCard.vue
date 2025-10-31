<template>
  <div class="bg-[#121212] h-auto w-auto">
    <div
      :class="`border-2 border-black -translate-y-1 -translate-x-1 group project-card flex flex-col gap-5 justify-between h-full tracking-wider bg-gray-500 hover:bg-gray-700 hover:-translate-y-2 w-full bg-cover bg-no-repeat bg-center p-3 lg:p-5 transition-all duration-300 ease-in-out relative overflow-hidden group`"
    >
      <div
        class="bg-gray-300 py-1 px-3 border-r-2 border-r-black border-b-2 border-b-black"
      >
        <p class="text-2xl w-fit font-bold">{{ projectName }}</p>
      </div>
      <div>
        <div class="flex flex-col gap-5">
          <div class="overflow-hidden transition-all duration-300">
            <div
              class="w-full bg-white border-2 border-black h-32 md:h-40 place-content-center place-items-center flex"
              :style="`background: url(${previewImg});
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;`"
            >
              <div
                class="bg-black/50 backdrop-blur-sm py-1 px-4 w-fit self-center rounded-full place-items-center place-content-center transition-all duration-300 overflow-hidden lg:translate-y-[350%] group-hover:translate-y-0"
              >
                <p
                  class="text-white text-center text-nowrap text-xs md:text-sm"
                >
                  {{ promptText }}
                </p>
              </div>
            </div>
          </div>

          <ul class="flex flex-wrap gap-3">
            <li
              v-for="(tool, index) in tools"
              :class="`text-xs font-medium px-5 py-1 ${bgColor[index]}`"
            >
              {{ tool }}
            </li>
          </ul>
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
