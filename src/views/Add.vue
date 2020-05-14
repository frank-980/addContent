<template>
  <div>
    <span >标题</span><input type="text" v-model="title">
    <span >内容</span><input type="text" v-model="content">
    <button @click="addContent">添加</button>
  </div>
</template>

<script>
//import store from '../store/index';
export default {
  name: 'Add',
  data(){
    return {
      title:'',
      content:'',
    }
  },
  methods:{
    addContent(){
      this.$store.dispatch('a/addList',{
        title:this.title,
        content:this.content
      }).then(()=>{
          this.$router.push('/home/list')
          console.log(this.$store.getters['a/addPerfix'])
      })
    }
  }
}
</script>
