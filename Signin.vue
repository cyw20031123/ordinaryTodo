<template>
  <div class="signin">
    <input
      type="name"
      class="name"
      v-model="name"
      @keyup.enter="next"
      placeholder="请输入账号\邮箱"
    />
    <input
      type="password"
      class="password"
      ref="password"
      @keyup.enter="signin"
      v-model="password"
      placeholder="请输入密码"
    />
    <div class="Forget" @click="Forget">忘记密码</div>
    <input
      type="button"
      class="btn btn-info input"
      value="登录"
      @click="signin"
    />
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
        (user) => {
          this.$emit("up");
        },
        (error) => {
          AV.User.loginWithEmail(this.name, this.password).then(
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
    Forget() {
      let person = prompt("请输入你的邮箱( ･´ω`･ )");
      if (person != null && person != "") {
        AV.User.requestPasswordReset(person);
        alert("请查看您的邮箱(*･ω< ) ");
      }else{
        alert("什么都没有输入哦！");
      }
    },
  },
};
</script>

<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
.password,
.name {
  margin-bottom: 10px;
}

.input {
  width: 100%;
}

.Forget {
  margin-bottom: 30px;
  cursor: pointer;
  color: gray;
}
.Forget:hover {
  color: black;
}
</style>