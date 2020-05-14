import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA={
  namespaced: true,
  state:()=>({
    contentList:[]
  }),
  mutations: {
    addList(state,payload){
      state.contentList.push(payload)
    }
  },
  actions: {
    addList({commit},value){
      return new Promise((res,rej)=>{
        commit('addList',value);
        res();
      })   
    }
  },
  getters:{
    addPerfix:state=>state.contentList
  }
}
export default new Vuex.Store({
  /*state:{
    contentList:["1","2"]
  },
  mutations: {
    addList(state,payload){
      state.contentList.push(payload)
    }
  },
  actions: {
    addList({commit},value){
      return new Promise((res,rej)=>{
        commit('addList',value);
        res();
      })   
    }
  },
  getters:{
    addPerfix:state=>state.contentList
  },*/
  modules: {
    a:moduleA
  }
})
