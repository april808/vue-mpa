<template>
  <nav>
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
  name: 'app',
  components: {

  },
  mounted() {
    // 在 mounted 階段使用 jQuery ($) 確保 DOM 已經渲染完成
    console.log($('img').attr('src'));
  },
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
