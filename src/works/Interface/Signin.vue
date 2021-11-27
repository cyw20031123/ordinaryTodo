<template>
  <div class="signin">
    <input type="name" class="name" v-model="name" @keyup.enter="next" placeholder="请输入账号\邮箱" />
    <input
      type="password"
      class="password"
      ref="password"
      @keyup.enter="signin"
      v-model="password"
      placeholder="请输入密码"
    />
    <input type="button" class="btn btn-info" value="登录" @click="signin" />
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    next() {
      this.$refs.password.focus();
    },
    signin() {
      AV.User.logIn(this.name, this.password).then(
      //使用用户名登录
        (user) => {
          this.$emit("up");
        },
        (error) => {
          AV.User.loginWithEmail(this.name, this.password).then(
            //使用邮箱登录
            (user) => {
              this.$emit("up");
            },
            (error) => {
              alert("账户或密码错误！￣へ￣");
            }
          );
        }
      );
    },
  },
};
</script>

<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 60px 40px 0 40px;
}
.password,
.name {
  border: 1px solid white;
  outline: none;
  border-radius: 3px;
  background-color: transparent;
  padding: 5px 10px;
}
.name {
  margin-bottom: 10px;
}
.password {
  margin-bottom: 30px;
}
</style>