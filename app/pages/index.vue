<template>
  <div class="flex flex-col gap-10 overflow-y-hidden overflow-x-hidden">
    <HeroSection @scroll="scrollToCTA" />
    <AboutSection />
    <Projects />
    <CallToAction ref="cta" />
  </div>
</template>
<script setup>
import { ref, nextTick } from "vue";

const cta = ref(null);

async function scrollToCTA() {
  await nextTick();

  if (cta.value?.scrollIntoView) {
    cta.value?.scrollIntoView({ behavior: "smooth" });
  } else if (cta.value?.$el) {
    cta.value?.$el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
