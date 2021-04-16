<template>
  <div id="app" :class="this.$route.name.bodyClass">
    <Header :routeName="this.$route.name" :viewport="viewport" />
    <router-view :viewport="viewport" />
  </div>
</template>

<script>
import "@/styles/App.scss";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      viewport: {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      },
    };
  },
  created() {
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
  },
  methods: {
    updateViewport() {
      this.viewport = {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      };
    },
  },
  components: {
    Header,
  },
};
</script>
