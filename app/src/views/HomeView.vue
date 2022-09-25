<template>
  <div class="home">
    <TheHeader />
    <TheSection />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheSection from "@/components/TheSection.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    TheSection,
  },
};
</script>
