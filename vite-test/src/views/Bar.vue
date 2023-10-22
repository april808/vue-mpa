<template>
  <h1>Bar</h1>
  <!-- 自適應側邊攔區塊 -->
  <button id="menu-switch" class="ham" @click="toggleSidebar">
    <span>{{ openSidebar }}</span>
  </button>
  <MainSidebar :sidebarOpen="openSidebar">
    <template v-slot:slotheader>
      <div class="link-list h4">
        <router-link to="/table">
          <li>介紹</li>
        </router-link>
        <router-link to="/">
          <li>首頁</li>
        </router-link>
      </div>
    </template>
    <!-- <template v-slot:slotfooter>
          <div class="link-list"></div>
        </template> -->
  </MainSidebar>
  <div
    class="pageMask"
    @click="menuclose"
    :class="{ active: openSidebar }"
  ></div>
  <button @click="greet">Greet</button>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import MainSidebar from "../components/MainSidebar.vue";

const openSidebar = ref(true);

function toggleSidebar() {
  console.log(openSidebar.value);
  openSidebar.value = !openSidebar.value;
}
function menuclose() {
  console.log("父層close");
  openSidebar.value = false;
}
const name = ref("Vue.js");

function greet(event) {
  alert(`Hello ${name.value}!`);
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName);
  }
}
</script>

<style lang="scss" scoped></style>
