<template>
  <div class="api-button">
    <div>{{ response }}</div>
    <button v-on:click="callServer">API</button>
  </div>
</template>
<script>
const axios = require("axios").default;
export default {
  name: "ApiButton",
  data: () => ({
    response: "",
  }),
  methods: {
    callServer() {
      axios.get("https://counter-app-server.herokuapp.com/").then((res) => {
        this.response = res.data;
      });
      setTimeout(() => {
        this.response = "";
      }, 2000);
    },
  },
  mounted() {
    console.log("mounted");
    if (this.$route.name === "Home")
      this.counter = this.$store.state.originalCounter;
  },
};
</script>
