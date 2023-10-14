<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <h2>{{ num }}</h2>

    {{ sampleStore }}
    <hr />
    sampleStore.name::
    <p>
      {{ sampleStore.name }}
    </p>
    <hr />
    {{ sampleStore.changeName(2565) }}
    <hr />
    {{ sampleStore.name }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";
import { useSampleStore } from "@/stores/sampleStore.js";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const num = ref(1); // Assuming num is reactive
    const sampleStore = useSampleStore();

    return {
      sampleStore,
      num,
    };
  },
};
</script>
