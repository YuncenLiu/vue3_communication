<template>
  <div class="son">
    <h1>我是子组件son</h1>
    <h2>我是子组件:{{info}}|{{money}}</h2>
    <button @click="handler">修改钱数</button>
  </div>
</template>

<script setup lang="ts">
//vue3框架提供了一个defineProps函数,不需要声明、引入，可以直接使用
//props:是一个代理对象,身上属性与属性值即为接受到props数据
//props数据:在模板中使用的时候可以省了props.xxx
//但是在ts区域使用的时候不能省略
 let props:any = defineProps(["info",'money']);
 //定义按钮回调
 const handler = ()=>{
   props.money+=100;
 }
</script>

<style scoped>
.son {
  width: 400px;
  height: 400px;
  background: hotpink;
}
</style>