(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e1b":function(e,t,n){"use strict";n("9ce9")},3950:function(e,t,n){},"3d58":function(e,t,n){},4918:function(e,t,n){},"51ce":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{mode:"out-in"}},[n(e.page,{tag:"component",on:{up:e.SwitchPages}})],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-section",attrs:{id:"notebook"}},[n("div",{attrs:{id:"packing"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event,expression:"event"}],attrs:{id:"text",placeholder:"回车添加事件",type:"text"},domProps:{value:e.event},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)},input:function(t){t.target.composing||(e.event=t.target.value)}}}),n("div",{attrs:{id:"hangInTheAir"}},[n("div",{staticClass:"hangInTheAir"},[e._v("未完成：")]),n("ul",{staticClass:"Store"},e._l(e.Store,(function(t,a){return n("li",{key:a,staticClass:"one"},[n("span",{staticClass:"label"},[e._v(e._s(a+1))]),n("span",{staticClass:"content"},[e._v(e._s(t[0]))]),n("span",{staticClass:"delete",on:{click:function(n){return e.success(t[1],a)}}},[e._v("完成呐")])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.Store.length>0,expression:"Store.length > 0"}],staticClass:"BottomBar"},[n("div",{staticClass:"label"},[e._v("还有"+e._s(e.Store.length)+"件事要做哦")]),n("div",{staticClass:"delete",on:{click:e.successAll}},[e._v("全都完成呐!")])])]),n("div",{attrs:{id:"Completed"}},[n("div",{staticClass:"Completed"},[e._v("已完成：")]),n("ul",{staticClass:"Store"},e._l(e.Completed,(function(t,a){return n("li",{key:a,staticClass:"one"},[n("span",{staticClass:"label"},[e._v(e._s(a+1))]),n("span",{staticClass:"content"},[e._v(e._s(t[0]))]),n("span",{staticClass:"delete",on:{click:function(n){return e.strikeOut(t[1],a)}}},[e._v("清除")])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.Completed.length>0,expression:"Completed.length > 0"}],staticClass:"BottomBar"},[n("div",{staticClass:"label"},[e._v("已经完成"+e._s(e.Completed.length)+"件事呐！")]),n("div",{staticClass:"delete",on:{click:e.clearAll}},[e._v("全部清除")])])]),n("input",{staticClass:"btn btn-danger button",attrs:{type:"button",value:"退出登录"},on:{click:e.LogOut}})])])},o=[],l=n("b85c"),u=(n("a434"),n("7db0"),n("d3b7"),{name:"notebook",data:function(){return{event:"",Store:[],Completed:[]}},methods:{successAll:function(){var e=this,t=new AV.Query("Event"),n=AV.User.current();t.equalTo("user",n),t.destroyAll().then((function(){var t,n=Object(l["a"])(e.Store);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.addCompleted(a[0])}}catch(s){n.e(s)}finally{n.f()}})),this.Store=[],alert("都完成啦！你好棒！φ(>ω<*) ")},clearAll:function(){var e=new AV.Query("Completed"),t=AV.User.current();e.equalTo("user",t),e.destroyAll(),this.Completed=[]},add:function(){var e=this;if(this.event){var t=AV.Object.extend("Event"),n=new t,a=this.event;this.event="";var s=AV.User.current();n.set("event",a),n.set("user",s),n.save().then((function(t){e.Store.push([a,t.id])}))}else alert("什么都没有写哦")},success:function(e,t){this.addCompleted(this.Store.splice(t,1)[0][0]);var n=AV.Object.createWithoutData("Event",e);n.destroy(),n.save()},strikeOut:function(e,t){var n=AV.Object.createWithoutData("Completed",e);this.Completed.splice(t,1),n.destroy(),n.save()},addCompleted:function(e){var t=this,n=AV.Object.extend("Completed"),a=new n,s=AV.User.current();a.set("completed",e),a.set("user",s),a.save().then((function(n){t.Completed.push([e,n.id])}))},LogOut:function(){AV.User.logOut(),this.$emit("up","SignIn")}},beforeMount:function(){var e=this,t=new AV.Query("Event"),n=AV.User.current();t.equalTo("user",n),t.find().then((function(t){var n,a=Object(l["a"])(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;e.Store.push([s.attributes.event,s.id])}}catch(r){a.e(r)}finally{a.f()}}));var a=new AV.Query("Completed");a.equalTo("user",n),a.find().then((function(t){var n,a=Object(l["a"])(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;e.Completed.push([s.attributes.completed,s.id])}}catch(r){a.e(r)}finally{a.f()}}))}}),c=u,p=(n("9241"),n("2877")),d=Object(p["a"])(c,i,o,!1,null,"4e4066dd",null),f=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-section container-fluid text-center SignIn"},[n("div",{staticClass:"LoginInterface"},[n("div",{staticClass:"button"},[n("div",{style:e.pattern?"color:lightskyblue":"",on:{click:function(t){e.pattern=!0}}},[e._v(" 登录 ")]),n("div",{style:e.pattern?"":"color:lightskyblue",on:{click:function(t){e.pattern=!1}}},[e._v(" 注册 ")])]),n("transition",{attrs:{mode:"out-in"}},[n(e.pattern?"Signin":"Registrant",{tag:"component",on:{up:e.up}})],1)],1)])},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{type:"name",placeholder:"请输入账号\\邮箱"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",staticClass:"password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signin.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"登录"},on:{click:e.signin}})])},y=[],g=(n("b0c0"),{name:"Signin",data:function(){return{name:"",password:""}},methods:{next:function(){this.$refs.password.focus()},signin:function(){var e=this;AV.User.logIn(this.name,this.password).then((function(t){e.$emit("up")}),(function(t){AV.User.loginWithEmail(e.name,e.password).then((function(t){e.$emit("up")}),(function(e){alert("账户或密码错误！￣へ￣")}))}))}}}),b=g,C=(n("954d"),Object(p["a"])(b,h,y,!1,null,"2b854ca0",null)),k=C.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"registrant"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{type:"name",placeholder:"请设置账号"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next1.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"text",staticClass:"password",attrs:{type:"text",placeholder:"请设置密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next2.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",staticClass:"email",attrs:{type:"email",placeholder:"请设置邮箱"},domProps:{value:e.email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.registrant.apply(null,arguments)},input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{staticClass:"btn btn-info",attrs:{type:"button",value:"注册"},on:{click:e.registrant}})])},_=[],O={name:"Registrant",data:function(){return{name:"",password:"",email:""}},methods:{next1:function(){this.$refs.text.focus()},next2:function(){this.$refs.email.focus()},registrant:function(){var e=new AV.User;e.setUsername(this.name),e.setPassword(this.password),e.setEmail(this.email),this.name="",this.password="",this.email="",e.signUp().then((function(e){alert("注册成功啦！快去登录吧！")}),(function(e){alert("注册失败啦！换个名字试一试？")}))}}},x=O,A=(n("beb9"),Object(p["a"])(x,w,_,!1,null,"041e8f43",null)),S=A.exports,j={components:{Signin:k,Registrant:S},name:"SignIn",data:function(){return{pattern:!0}},methods:{up:function(){this.$emit("up","NoteBook")}},beforeCreate:function(){var e=AV.User.current();e&&this.$emit("up","TODO")}},V=j,P=(n("fb43"),Object(p["a"])(V,v,m,!1,null,"47141ba8",null)),E=P.exports,U={name:"App",components:{TODO:f,SignIn:E},data:function(){return{page:"SignIn",musicid:"no"}},methods:{SwitchPages:function(e){this.page=e}}},$=U,I=(n("2e1b"),Object(p["a"])($,s,r,!1,null,"5ba03ab0",null)),T=I.exports,N=n("bc3a"),q=n.n(N),M=AV;M.Query,M.User;AV.init({appId:"coJvzqIgHkiuWHgUDuMtOC37-gzGzoHsz",appKey:"y9tnM5dWs5eC3ubS6OXIrSqm",serverURL:"https://cojvzqig.lc-cn-n1-shared.com"}),a["a"].config.assetsPublicPath="./",a["a"].prototype.$http=q.a,new a["a"]({render:function(e){return e(T)}}).$mount("#app")},9241:function(e,t,n){"use strict";n("3950")},"954d":function(e,t,n){"use strict";n("3d58")},"9ce9":function(e,t,n){},beb9:function(e,t,n){"use strict";n("51ce")},fb43:function(e,t,n){"use strict";n("4918")}});
//# sourceMappingURL=app.99d578b5.js.map