<template>
  <div class="page-section container-fluid text-center SignIn">
    <div class="LoginInterface">
      <div class="button">
        <div
          @click="pattern = true"
          :style="pattern ? 'color:lightskyblue' : ''"
        >
          登录
        </div>
        <div
          @click="pattern = false"
          :style="!pattern ? 'color:lightskyblue' : ''"
        >
          注册
        </div>
      </div>
      <transition mode="out-in">
        <component @up="up" :is="pattern ? 'Signin' : 'Registrant'"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Signin from "./Interface/Signin.vue";
import Registrant from "./Interface/Registrant.vue";
export default {
  components: {
    Signin,
    Registrant,
  },
  name: "SignIn",
  data() {
    return {
      pattern: true,
    };
  },
  methods: {
    up() {
      this.$emit("up", "NoteBook");
    },
  },
  beforeCreate() {
    const currentUser = AV.User.current();
    //检测用户是否已经登录，如果已经登录，直接跳转到TODO界面
    if (currentUser) {
      this.$emit("up", "TODO");
    }
  },
};
</script>

<style scoped>
.SignIn {
  padding: 8rem 44px 0 44px;
}
.LoginInterface {
    margin: 0 auto;
  border: 1px solid gray;
  border-radius: 3px;
  background: linear-gradient(
      to bottom,
      rgba(129, 129, 129, 0.3) 0%,
      rgba(136, 136, 136, 0.3) 100%
    ),
    url("../../public/assets/img/background-4.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  max-width: 400px;
}
.button {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.button > * {
  width: 50%;
  cursor: pointer;
}

.v-leave-to,
.v-enter {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>