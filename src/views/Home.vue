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
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
