<template>
    <div class="headers">
        <div class="avatar">
            <img src="../assets/logo.png"/>
            <p>FRANK</p>
        </div>
        <div class="nav">
            <a>
                <router-link :to="{name:'List'}">新闻列表</router-link>
            </a>
            <a>
                <router-link :to="{name:'User'}">个人信息</router-link>
            </a>         
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            parm:""
        }
    },
}
</script>
<style>
.navActive{
    list-style: none;
    text-align: center;
}  
.navList li{
    float:left
}  
</style>