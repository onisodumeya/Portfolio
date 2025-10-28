<template>
  <div
    @click.stop="closeMenu"
    class="fixed flex z-10 h-screen top-0 w-full bg-black/0 backdrop-blur-2xl place-items-end justify-end transition-all duration-500 ease-in-out"
    :class="{
      'right-0': isMenuOpen,
      '-right-full': !isMenuOpen,
    }"
  >
    <div
      @click.stop
      class="h-full w-full md:w-2/5 flex items-center justify-center bg-black/90 backdrop-blur-3xl transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-col gap-10">
        <div v-for="link in links" class="relative overflow-hidden w-fit">
          <NavLink
            @click.stop="closeMenu"
            :to="link.link"
            :label="link.title"
            class="transition-all duration-500"
            :class="{
              '-bottom-40': !showMenuLinks,
              '-bottom-0': showMenuLinks,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
  },
});

const showMenuLinks = ref(false);
const emit = defineEmits(["closeMenu"]);

function closeMenu() {
  emit("closeMenu");
}

watch(
  () => props.isMenuOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflowY = "hidden";
      setTimeout(() => {
        showMenuLinks.value = true;
      }, 500);
    } else {
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
        showMenuLinks.value = false;
      }, 500);
    }
  }
);

const links = [
  {
    link: "/",
    title: "Home",
  },
  // {
  //   link: "/about",
  //   title: "About Me",
  // },
  // {
  //   link: "/contact",
  //   title: "Contact Me",
  // },
];
</script>
