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
        <li @click="num--"><button>減號</button></li>
        <li>04</li>
        <li>05</li>
      </template>
    </List>
    <hr />
    <!-- <input ref="input" /> -->
    <input type="text" v-model="input">
    <br>
    <template v-if="input">
      <h2>{{ input }}</h2>
    </template>
    <hr>
    <input type="text" v-model="inputValue" />
    <h3>
      {{ `v-model="inputValue": ${inputValue}` }}
    </h3>
    
    <p>
      {{ msg }}
    </p>
  </div>
</template>
<script>
import { ref, onMounted, watch, watchEffect } from "vue"; // 引入
import List from "@/components/List.vue";

export default {
  components: {
    List,
  },
  setup() {
    // 使用 ref 建立響應式data
    const msg = ref("Hello World");
    const input = ref("Hello World");
    console.log(input);

    // 初始化 inputValue
    const inputValue = ref("");
    console.log("inputValue updated:", inputValue); // 添加调试语句

    // onMounted(() => {
    //   if (input.value && input.value.parentNode) {
    //     input.value.focus(); // 聚焦到输入框
    //   }
    // });

    // 監聽輸入變化
    watch(input, (newValue, oldValue) => {
      console.log("watch input", newValue, oldValue);
      input.value = newValue ? newValue : ""; // 使用三元運算子檢查
    });

    return {
      msg,
      input, // 返回需要在模板中使用的data
      inputValue, // 傳回用於顯示輸入框的值
    };
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
