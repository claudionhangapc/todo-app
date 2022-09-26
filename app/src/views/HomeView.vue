<template>
  <div class="home" :class="darkMode ? 'bg-dark' : 'bg-light'">
    <TheHeader />
    <TheSection />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheSection from "@/components/TheSection.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    TheHeader,
    TheSection,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style>
.home {
  height: 100vh;
  padding-bottom: 40px;
}

.bg-dark {
  background-color: #161722;
}
.bg-light {
  background-color: #d2d3db;
}
</style>
