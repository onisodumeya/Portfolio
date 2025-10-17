<template>
  <div
    class="relative min-h-screen max-w-screen overflow-x-hidden bg-gray-300 text-[#1b1b1b]"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import "../assets/css/cursor.css";
useHead({
  title: "Onisodumeya",
});
</script>
