<template>
  <div class="about">
    <h1>This is an about page</h1>
    <List>
      <!-- 使用具名插槽 -->
      <template v-slot:header>
        <p>This is the default content for the "name" slot.</p>
      </template>

      <template v-slot:footer>
        <li>{{ num }}</li>
        <li @click="num++"><button>加號</button></li>
        <lid @click="num--"> <button>減號</button></lid>
        <li>04</li>
        <li>05</li>
      </template>
    </List>
  </div>
</template>
<script>
import List from "@/components/List.vue";

export default {
  components: {
    List,
  },
  data() {
    return {
      num: 1,
    };
  },
};
</script>

<style scoped>
* {
  outline: 0.5px solid gold;
  /* padding: 0; */
  margin: 0;
}
</style>
