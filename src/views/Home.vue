<template>
  <div class="home">
    <ul>
      <li>
        <router-link :to="{name:'List'}">新闻列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'User'}">个人信息</router-link>
      </li>
    </ul>
    <router-view/>
    <footers @eventa="getEventa" dataname="iam home">
      <div class="slot1" slot="slot1"><span>header222</span></div>
      <span slot="slot2">footer222</span>
    </footers>
  </div>
  
</template>

<script>
import footers from "../components/footer.vue";
export default {
  name: 'Home',
  components:{
    footers
  },
  methods:{
    getEventa(value){
      console.log(value)
    }
  }
}
</script>
<style>
.slot1{
  border:2px solid red
}
</style>