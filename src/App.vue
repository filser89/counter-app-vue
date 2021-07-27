<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c7d1db;
  min-height: 100vh;
  background-image: url("https://picsum.photos/id/0/200/300");
  background-size: cover;
}
</style>
<script>
import Counter from "@/components/Counter";

export default {
  // computed: {
  //   layout() {
  //     return (this.$route.meta.layout || "empty") + "-layout";
  //   },
  // },
  components: {},
};
</script>