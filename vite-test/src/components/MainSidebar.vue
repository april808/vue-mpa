<template>
<transition name="sidebar-slide">
    <div class="sidebar" v-if="sidebarOpen">
      <slot name="slotheader"></slot>
      <slot name="slotfooter"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  //props:從父層繼承的屬性，key為sidebarOpen，型態為Boolean
  // props: ['showSideBar'],
  props: {
    sidebarOpen: Boolean
  },
  methods: {
    closeSidebar() {
      console.log('子層close');
      // emit: 觸發父層的function或js
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

  // //進場前
  // //退場後
  // .v-enter-from,
  // .v-leave-to {
  //   transform: translateX(100%)
  // }
  // //退場前
  // //進場後
  // // .v-leave-from,
  // .v-enter-to {
  //   transform: translateX(0)
  // }
.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transition: transform 0.3s;
}
.sidebar-slide-enter-from, .sidebar-slide-leave-to {
  transform: translateX(100%);
}
.sidebar-slide-enter-to, .sidebar-slide-leave-from {
  transform: translateX(0);
}







</style>
