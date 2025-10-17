<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 90 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.6255 105.472L0 21.3035L81.7904 61.6151L44.7221 74.2219L44.1488 75.1439L28.6255 105.472Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.37543 31.6136L29.4133 90.5317L39.8988 70.127L40.4916 69.1087L66.9984 60.1421L9.37543 31.6136Z"
      fill="black"
    />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: Number,
    default: 90,
  },
  height: {
    type: Number,
    default: 106,
  },
});
</script>
