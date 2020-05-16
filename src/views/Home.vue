<template>
  <div class="home">
    <headers></headers>
      <router-view/>
    <footers @eventa="getEventa" dataname="iam home">
      <div class="slot1" slot="slot1"><span>header222</span></div>
      <span slot="slot2">footer222</span>
    </footers>
  </div>
  
</template>

<script>
import headers from "../components/headers.vue";
import footers from "../components/footer.vue";
export default {
  name: 'Home',
  components:{
    headers,
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