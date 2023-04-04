<template>
  <div>
    <h1>我是子组件2</h1>
    <button @click="handler">点击我给父组件传递法拉利</button>
    <button @click="$emit('click','我是自定义事件')">点击我触发click自定义事件</button>
  </div>
</template>

<script setup lang="ts">
//defineEmits:vue3提供内置函数,不需要引入，不需要声明直接使用
//次函数执行,会返回一个$emit方法,此方法可以触发自定义事件
//vue2:this.$emit
let $emit = defineEmits(["xxx",'click']);
//button按钮点击事件回调
const handler = () => {
  //第一个参数:事件类型 第二个参数|第三个参数|N参数即为传递给父组件的数据
  $emit("xxx", "法拉利", "茅台");
};
</script>

<style scoped>
</style>