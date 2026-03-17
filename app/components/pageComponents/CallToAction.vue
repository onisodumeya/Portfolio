<template>
  <section
    ref="ctaSection"
    class="h-auto min-h-screen flex flex-col md:flex-row place-content-center items-center p-5 py-10 md:py-20 gap-20 z-20"
  >
    <div class="md:p-5 md:w-2/5 md:h-full md:place-content-center">
      <div ref="CTA" class="flex flex-col gap-5">
        <h2 class="text-2xl md:text-3xl leading-normal md:leading-normal">
          Looking for someone to bring your idea to life?
        </h2>
        <div class="flex">
          <form ref="formRef" class="flex flex-col w-full items-center gap-10">
            <div class="flex gap-5 w-full">
              <label for="" class="w-full rounded-none">
                <input
                  type="text"
                  name="name"
                  class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                  placeholder="Your name"
                />
              </label>
              <label for="" class="w-full rounded-none">
                <input
                  type="email"
                  name="email"
                  class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                  placeholder="Your email"
                />
              </label>
            </div>
            <label for="" class="w-full rounded-none">
              <textarea
                type="text"
                name="description"
                class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                placeholder="Tell me about your project"
              />
            </label>
            <label for="" class="w-full rounded-none">
              <input
                type="text"
                name="budget"
                class="w-full py-2 border-b-2 border-b-[#121212] rounded-none outline-none bg-transparent text-sm"
                placeholder="Budget (optional)"
              />
            </label>
            <PriBtn
              class="self-start"
              @btnClicked="sendEmail"
              aria="Send message"
            >
              <template #default>
                <div v-if="loading" class="spinner"></div>
                <span v-else-if="sent">Message Sent ✅</span>
                <span v-else-if="errorSent">Error Sending Message ❌</span>
                <span v-else>Submit</span>
              </template>
            </PriBtn>
          </form>
        </div>
      </div>
    </div>
    <!-- Email snd socials -->
    <div ref="socials" class="md:w-3/5 flex flex-col items-end">
      <div class="flex items-center gap-2 p-5 text-xl">
        <p>Email:</p>
        <p>onisodumeyamazi@gmail.com</p>
      </div>
      <div
        class="relative md:p-5 pb-10 w-full md:h-full md:place-content-center md:place-items-end flex flex-col gap-5"
      >
        <div class="flex flex-wrap gap-5">
          <a
            v-for="social in socialLinks"
            :href="social.link"
            :aria-label="social.aria"
            target="_blank"
            class="text-sm md:text-base flex items-center gap-3 h-fit w-fit px-5 py-2 border border-[#121212] hover:bg-[#121212] hover:shadow-md hover:shadow-black/50 hover:-translate-y-1 hover:text-white transition-all duration-300"
          >
            <Icon :icon="social.icon" class="text-base" />
            <p>{{ social.platform }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { useRuntimeConfig } from "#app";

gsap.registerPlugin(ScrollTrigger);

const ctaSection = ref(null);
const CTA = ref(null);
const socials = ref(null);
import { Icon } from "@iconify/vue";

defineExpose({ ctaSection });

onMounted(() => {
  gsap.from(socials.value, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: socials.value,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(CTA.value, {
    x: -100,
    opacity: 0.01,
    duration: 1,
    ease: "circ.out",
    scrollTrigger: {
      trigger: CTA.value,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
});

const socialLinks = [
  {
    platform: "LinkedIn",
    link: "https://LinkedIn.com/in/onisodumeyamazi",
    icon: "simple-icons:linkedin",
    aria: "Conect with me on Linkedin profile",
  },
  {
    platform: "GitHub",
    link: "https://github.com/onisodumeya",
    icon: "simple-icons:github",
    aria: "Visit my GitHub profile",
  },
  {
    platform: "WhatsApp",
    link: "wa.me/2348037819521",
    icon: "simple-icons:whatsapp",
    aria: "Message me on Whatsapp",
  },
];

const config = useRuntimeConfig();

const formRef = ref(null);
const loading = ref(false);
const sent = ref(false);
const errorSent = ref(false);

const sendEmail = async () => {
  loading.value = true;
  sent.value = false;
  errorSent.value = false;

  try {
    await emailjs.sendForm(
      config.public.emailServiceId,
      config.public.emailTemplateId,
      formRef.value,
      config.public.emailPublicKey,
    );

    formRef.value.reset();
    sent.value = true;
  } catch (error) {
    console.log(error);
    errorSent.value = true;
    sent.value = false;
  } finally {
    loading.value = false;
    setTimeout(() => {
      sent.value = false;
      errorSent.value = false;
    }, 2000);
  }
};
</script>

<style scoped>
.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
