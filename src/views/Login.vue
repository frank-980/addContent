<template>
  <div>
    <form action="" v-if="isLogin">
      <span>用户名</span><input >
      <span>密码</span><input type="text">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form action="" v-else>
      <span>用户名</span><input type="text">
      <span>密码</span><input type="text">
      <span>再次输入密码</span><input type="text">
      <button type="button" @click="login()">注册</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      isLogin:true
    }
  },
  methods:{
    login(){
      this.$router.push('/home/list')
    },
    reg(){
      this.isLogin=false
    }
  }
}
</script>
