<template>
  <nav>
    <p>Product.vue</p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <hr>
    <img src="https://fakeimg.pl/300x200/200">
  </nav>
  <router-view/>
</template>

<script>
import $ from 'jquery';


export default {
  name: 'list',
  components: {

  },
  mounted() {
    // 在 mounted 階段使用 jQuery ($) 確保 DOM 已經渲染完成
    console.log($('img').attr('src'));
  },
}

</script>