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
    <footers @eventa="getEventa" dataname="iam home"></footers>
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
