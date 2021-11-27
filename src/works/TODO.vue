<template>
  <div class="page-section" id="notebook">
    <div id="packing">
      <input
        id="text"
        placeholder="回车添加事件"
        type="text"
        v-model="event"
        @keyup.enter="add"
      />
      <div id="hangInTheAir">
        <div class="hangInTheAir">未完成：</div>
        <ul class="Store">
            <li class="one" v-for="(item, key) in Store" :key="key">
              <span class="label">{{ key + 1 }}</span>
              <span class="content">{{ item[0] }}</span>
              <span class="delete" @click="success(item[1], key)">完成呐</span>
            </li>
        </ul>

        <div class="BottomBar" v-show="Store.length > 0">
          <div class="label">还有{{ Store.length }}件事要做哦</div>
          <div class="delete" @click="successAll">全都完成呐!</div>
        </div>
      </div>
      <div id="Completed">
        <div class="Completed">已完成：</div>
        <ul class="Store">
          <li class="one" v-for="(item, key) in Completed" :key="key">
            <span class="label">{{ key + 1 }}</span>
            <span class="content">{{ item[0] }}</span>
            <span class="delete" @click="strikeOut(item[1], key)">清除</span>
          </li>
        </ul>
        <div class="BottomBar" v-show="Completed.length > 0">
          <div class="label">已经完成{{ Completed.length }}件事呐！</div>
          <div class="delete" @click="clearAll">全部清除</div>
        </div>
      </div>
      <input
        type="button"
        class="btn btn-danger button"
        @click="LogOut"
        value="退出登录"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "notebook",
  data() {
    return {
      event: "",
      Store: [],
      Completed: [],
    };
  },
  methods: {
    successAll() {
      //删除所有的未完成代办
      const Event = new AV.Query("Event");
      const user = AV.User.current();
      Event.equalTo("user", user);
      Event.destroyAll().then(() => {
        for (const n of this.Store) {
          this.addCompleted(n[0]);
        }
      });
      this.Store = [];
      alert("都完成啦！你好棒！φ(>ω<*) ");
    },
    clearAll() {
      //删除所有的已完成代办
      const Completed = new AV.Query("Completed");
      const user = AV.User.current();
      Completed.equalTo("user", user);
      Completed.destroyAll();
      this.Completed = [];
    },
    add() {
      //添加一个新的代办
      if (this.event) {
        const Event = AV.Object.extend("Event");
        //获取class
        const event = new Event();
        //创建一个新的对象
        let i = this.event;
        this.event = "";
        const user = AV.User.current();
        event.set("event", i);
        event.set("user", user);
        event.save().then((up) => {
          this.Store.push([i, up.id]);
        });
      } else {
        alert("什么都没有写哦");
      }
    },
    success(id, key) {
      this.addCompleted(this.Store.splice(key, 1)[0][0]);
      //删除页面上的数据,把数据添加到已完成列表
      const Event = AV.Object.createWithoutData("Event", id);
      // id对象会被删除
      Event.destroy();
      // 保存对象
      Event.save();
    },
    strikeOut(id, key) {
      const Completed = AV.Object.createWithoutData("Completed", id);
      this.Completed.splice(key, 1);
      // id对象会被删除
      Completed.destroy();
      // 保存对象
      Completed.save();
    },
    addCompleted(n) {
      //把已完成代办添加到库里
      const Completed = AV.Object.extend("Completed");
      let completed = new Completed();
      const user = AV.User.current();
      completed.set("completed", n);
      completed.set("user", user);
      completed.save().then((up) => {
        this.Completed.push([n, up.id]);
      });
    },
    LogOut() {
      //用户退出登录
      AV.User.logOut();
      this.$emit("up", "SignIn");
    },
  },
  beforeMount() {
    const Event = new AV.Query("Event");
    const user = AV.User.current();
    Event.equalTo("user", user);
    //获取这个用户在这个class里储存的数据
    Event.find().then((events) => {
      for (const i of events) {
        this.Store.push([i.attributes.event, i.id]);
      }
    });
    const Completed = new AV.Query("Completed");
    Completed.equalTo("user", user);
    Completed.find().then((completeds) => {
      for (const i of completeds) {
        this.Completed.push([i.attributes.completed, i.id]);
      }
    });
  },
};
</script>

<style scoped>

#notebook {
  min-height: calc(100vh - 53px);
  display: flex;
  justify-content: center;
}
#packing {
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  background: url("../../public/assets/img/background-4.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  position: relative;
}
@media only screen and (max-width: 360px) {
  #packing {
    width: 100%;
  }
}
#text {
  padding: 5px 10px;
  width: 100%;
  border: 1px solid gray;
  outline-color: lightskyblue;
  border-radius: 3px;
  background-color: transparent;
}
#hangInTheAir {
  margin-top: 20px;
  max-height: 500px;
  overflow: auto;
}
#Completed {
  margin: 50px 0;
  max-height: 500px;
  overflow: auto;
}
.Store {
  padding: 0;
}
.one {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 10px;

  margin-top: 5px;
  border-radius: 5px;
}
#hangInTheAir .one {
  color: red;
  border: 1px solid red;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
}
#Completed .one {
  color: green;
  border: 1px solid green;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
}
.hangInTheAir {
  border-bottom: 2px solid gray;
  color: red;
}

.Completed {
  border-bottom: 2px solid gray;
  color: green;
}

.label {
  font-size: 12px;
  line-height: 24px;
}
.delete {
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
}
.BottomBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid gray;
}

.button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>