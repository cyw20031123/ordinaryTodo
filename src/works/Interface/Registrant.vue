<template>
  <div class="registrant">
    <input
      type="name"
      class="name"
      v-model="name"
      @keyup.enter="next1"
      placeholder="请设置账号"
    />
    <input
      type="text"
      class="password"
      ref="text"
      v-model="password"
      @keyup.enter="next2"
      placeholder="请设置密码"
    />
    <input
      type="email"
      class="email"
      ref="email"
      v-model="email"
      @keyup.enter="registrant"
      placeholder="请设置邮箱"
    />
    <input
      type="button"
      value="注册"
      @click="registrant"
      class="btn btn-info"
    />
  </div>
</template>

<script>
export default {
  name: "Registrant",
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    next1() {
      this.$refs.text.focus();
    },
    next2() {
      this.$refs.email.focus();
    },
    registrant() {
      const land = AV.Object.extend("UserName");
      const data = new land();
      data.set("name", this.name);
      const user = new AV.User();
      //账号设置
      user.setUsername(this.name);
      //密码设置
      user.setPassword(this.password);
      //邮箱设置
      user.setEmail(this.email);
      this.name = "";
      this.password = "";
      this.email = "";
      user.signUp().then(
      	(user) => {
      		// 注册成功
      		data.save();
      		alert("注册成功啦！快去登录吧！");
      	},
      	(error) => {
      		alert("注册失败啦！换个名字试一试？");
      	}
      );
    },
  },
};
</script>

<style scoped>
.registrant {
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 60px 40px 0 40px;
}
.password,
.name,
.email {
  border: 1px solid white;
  outline: none;
  border-radius: 3px;
  background-color: transparent;
  padding: 5px 10px;
}
.name,
.password {
  margin-bottom: 10px;
}
.email {
  margin-bottom: 30px;
}
</style>