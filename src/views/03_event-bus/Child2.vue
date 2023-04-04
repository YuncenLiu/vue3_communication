<template>
  <div class="son1">
    <h1>我是兄弟组件曹丕</h1>
    <button @click="handler">点击我给的兄弟组件大宝剑</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '../../bus'
//按钮的回调
const handler = ()=>{
  //第一个参数:事件的类型 第二个参数:注入数据
   $bus.emit('sendData','大宝剑');
}
</script>

<style scoped>
.son1{
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>