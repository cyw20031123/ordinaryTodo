<template>
  <div id="app">
    <transition mode="out-in">
      <component @up="SwitchPages" :is="page"></component>
    </transition>
  </div>
</template>

<script>
import TODO from "./works/TODO.vue";
import SignIn from "./works/SignIn.vue";
export default {
  name: "App",
  components: {
    TODO,
    SignIn,
  },
  data() {
    return {
      page: "SignIn",
      musicid:"no"
    };
  },
  methods: {
    SwitchPages(msg) {
      this.page = msg;
    },
  },
};
</script>

<style scoped>
.v-leave-to,
.v-enter {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>
