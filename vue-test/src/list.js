import { createApp } from "vue";
import List from "./List.vue";
import router from "./router";
import store from "./store";

createApp(List).use(store).use(router).mount("#list-app");
