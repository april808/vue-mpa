<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { useSampleStore } from "./stores/sampleStore.js";

const num = ref(1);
const sampleStore = useSampleStore();

const changeName = () => {
  sampleStore.changeName("New Name");
};

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/bar">bar</router-link> |
    <router-link to="/table">table</router-link>
    <hr />
    <!-- <img src="https://fakeimg.pl/300x200/200" /> -->
  </nav>
  <!-- <h2>{{ num }}</h2>

    {{ sampleStore }}
    <hr />
    sampleStore.name::
    <p>
      {{ sampleStore.name }}
    </p>
    <hr />
    {{ sampleStore.changeName(2565) }}
    <hr />
    {{ sampleStore.name }} -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
