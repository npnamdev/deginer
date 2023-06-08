<template>
  <div id="wrapper">
    <HeaderMenu />
    <router-view />
  </div>
  <!-- <button @click="$store.commit('increment')">Tăng</button> -->
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";
export default {
  data() {
    return {};
  },
  components: {
    HeaderMenu,
  },
};
</script>

