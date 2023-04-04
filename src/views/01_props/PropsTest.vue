<template>
  <div class="box">
    <h1>props</h1>
    <h2>我是父组件王健林---{{money}}</h2>
    <hr>
    <!-- props:实质就是利用属性与属性值给子组件传递参数 -->
    <Child info="我爱祖国" :money="money"></Child>
  </div>
</template>

<script setup lang="ts">
//引入子组件
import Child from './Child.vue'
//利用ref定义响应式数据
import {ref} from 'vue';
let money = ref(10000);
</script>

<style scoped>
.box{
  width:100%;
  height: 600px;
  background: yellowgreen;
}
</style>