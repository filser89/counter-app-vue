<template>
  <div class="second">
    <div class="container">
      <div class="row">
        <div class="col-4"><Counter /></div>
        <div class="col-4"><Counter /></div>
        <div class="col-4"><Counter /></div>
        <div class="col-4"><Counter /></div>
        <div class="col-4"><Counter /></div>
        <div class="col-4"><Counter /></div>

        <!-- <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter /> -->
      </div>
      <button class="mt-3" v-on:click="$router.push('/')">Back</button>
    </div>
  </div>
</template>


<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "Home",
  components: {
    Counter,
  },
};
</script>
