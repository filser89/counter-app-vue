<template>
  <div class="counter">
    <div class="counter-item">
      <h3>Counter</h3>
      <p>Current value: {{ counter }}</p>
      <button v-on:click="clicked">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: () => ({
    counter: 0,
  }),
  methods: {
    clicked() {
      this.counter += 1;
      if (this.counter % 5 === 0 && this.$route.name == "Home") {
        setTimeout(() => {
          this.$router.push("Second");
          this.$store.commit("setCounter", this.counter);
        }, 500);
      }
    },
  },
  mounted() {
    console.log("mounted");
    if (this.$route.name === "Home")
      this.counter = this.$store.state.originalCounter;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
