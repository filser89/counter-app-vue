<template>
  <div class="home">
    <div class="container">
      <ApiButton />
      <Counter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import ApiButton from "@/components/ApiButton.vue";

export default {
  name: "Home",
  components: {
    Counter,
    ApiButton,
  },
};
</script>
