<template>
  <div>
    <ul>
      <li v-for="(item,index) in List" :key="index">
        {{item.title}}-{{item.content}}</li>
    </ul>
    <button @click="toAddPage">添加消息</button>
  </div>
</template>

<script>

export default {
  name: 'List',
  methods:{
    toAddPage:function(){
      this.$router.push("/add")
    }
  },
  computed:{
    List(){
      return this.$store.getters['a/addPerfix']
    }
  }
}
</script>
