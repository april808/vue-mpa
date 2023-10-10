import { createApp } from "vue";
import Product from "./Product.vue";
// import router from "./router";
// import store from "./store";

createApp(Product).use(store).use(router).mount("#product-app");
